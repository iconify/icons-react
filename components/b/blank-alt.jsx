import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/k/kd2kh4duv.css';
import '../../css/n/nv2ep8lvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="kd2kh4duv"/><path class="nv2ep8lvl"/></g>`,
		"fallback": "lets-icons:blank-alt",
	});
}

export default Component;
