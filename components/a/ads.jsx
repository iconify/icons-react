import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxf281bfp.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxf281bfp"/>`,
		"fallback": "whh:ads",
	});
}

export default Component;
