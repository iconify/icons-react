import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aku1-wbhy.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aku1-wbhy"/>`,
		"fallback": "el:flag-alt",
	});
}

export default Component;
