import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eef3-vfsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eef3-vfsk"/>`,
		"fallback": "pixelarticons:align-center-horizontal-sharp",
	});
}

export default Component;
