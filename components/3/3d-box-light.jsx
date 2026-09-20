import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-iu7ybaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-iu7ybaj"/>`,
		"fallback": "lets-icons:3d-box-light",
	});
}

export default Component;
