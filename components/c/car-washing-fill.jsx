import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nho0z4byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nho0z4byh"/>`,
		"fallback": "ri:car-washing-fill",
	});
}

export default Component;
