import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ropm3r5qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ropm3r5qo"/>`,
		"fallback": "boxicons:birthday-cake-filled",
	});
}

export default Component;
