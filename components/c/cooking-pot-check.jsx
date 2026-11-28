import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osd5_vbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osd5_vbna"/>`,
		"fallback": "noviair:cooking-pot-check",
	});
}

export default Component;
