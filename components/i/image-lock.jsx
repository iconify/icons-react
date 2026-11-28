import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djqr_wbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djqr_wbxz"/>`,
		"fallback": "noviair-light:image-lock",
	});
}

export default Component;
