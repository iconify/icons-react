import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c810rab6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c810rab6m"/>`,
		"fallback": "keyline-icons:clock-6",
	});
}

export default Component;
