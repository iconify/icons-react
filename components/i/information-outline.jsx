import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia6arpbdc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia6arpbdc"/>`,
		"fallback": "zondicons:information-outline",
	});
}

export default Component;
