import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puh1-6bau.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puh1-6bau"/>`,
		"fallback": "raphael:inbox",
	});
}

export default Component;
