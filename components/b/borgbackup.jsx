import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxl72eb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxl72eb3d"/>`,
		"fallback": "thesvg-color:borgbackup",
	});
}

export default Component;
