import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg_-8gbxp.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg_-8gbxp"/>`,
		"fallback": "el:gbp",
	});
}

export default Component;
