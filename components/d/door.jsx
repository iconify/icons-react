import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mgqx1abjd.css';
import '../../css/v/ve1mp5b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mgqx1abjd"/><path class="ve1mp5b_r"/></g>`,
		"fallback": "akar-icons:door",
	});
}

export default Component;
