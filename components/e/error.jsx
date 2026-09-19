import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7hgx0blj.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7hgx0blj"/>`,
		"fallback": "el:error",
	});
}

export default Component;
