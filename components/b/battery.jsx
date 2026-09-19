import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iyyd_zb3g.css';
import '../../css/k/kpl91mcbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="iyyd_zb3g"/><path class="kpl91mcbk"/></g>`,
		"fallback": "feather:battery",
	});
}

export default Component;
