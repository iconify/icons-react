import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf53md_sw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf53md_sw"/>`,
		"fallback": "memory:gamepad-up-right-fill",
	});
}

export default Component;
