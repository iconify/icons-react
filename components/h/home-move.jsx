import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gj0ui5c7d.css';
import '../../css/n/nmrvwhbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gj0ui5c7d"/><path class="nmrvwhbqj"/></g>`,
		"fallback": "tabler:home-move",
	});
}

export default Component;
