import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmzfo0b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmzfo0b9d"/>`,
		"fallback": "boxicons:image-alt-filled",
	});
}

export default Component;
