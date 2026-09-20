import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu20pdb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu20pdb4r"/>`,
		"fallback": "keyline-icons:arrow-in-down-dashed-panel",
	});
}

export default Component;
