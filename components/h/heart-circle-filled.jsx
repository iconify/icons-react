import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul0z0lfqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul0z0lfqa"/>`,
		"fallback": "boxicons:heart-circle-filled",
	});
}

export default Component;
