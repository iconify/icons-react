import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mme__qbhi.css';
import '../../css/l/l9s2l9b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mme__qbhi"/><path class="l9s2l9b2t"/>`,
		"fallback": "bx:info-square",
	});
}

export default Component;
