import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of7v_qbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="of7v_qbso"/>`,
		"fallback": "si:align-horiz-center-detailed-fill",
	});
}

export default Component;
