import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebi_z2qhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebi_z2qhx"/>`,
		"fallback": "pixelarticons:avatar-square",
	});
}

export default Component;
