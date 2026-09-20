import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xwq10eb_i.css';
import '../../css/k/kp93kgxdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xwq10eb_i"/><path class="kp93kgxdf"/></g>`,
		"fallback": "tabler:device-tablet-question",
	});
}

export default Component;
