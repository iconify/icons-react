import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esc2lymja.css';
import '../../css/n/nn1p_hz4s.css';
import '../../css/w/w30ikw3fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esc2lymja"/><path class="nn1p_hz4s"/><path class="w30ikw3fg"/>`,
		"fallback": "token:blnd",
	});
}

export default Component;
