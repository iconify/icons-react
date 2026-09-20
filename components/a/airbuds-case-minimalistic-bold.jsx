import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa3i2xbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wa3i2xbai"/>`,
		"fallback": "solar:airbuds-case-minimalistic-bold",
	});
}

export default Component;
