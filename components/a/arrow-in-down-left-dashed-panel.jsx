import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9fvg1b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9fvg1b0f"/>`,
		"fallback": "keyline-icons:arrow-in-down-left-dashed-panel",
	});
}

export default Component;
