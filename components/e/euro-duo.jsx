import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/awq37tbzx.css';
import '../../css/q/qfscns7yy.css';
import '../../css/n/ndpfd3bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="awq37tbzx"/><path class="qfscns7yy"/><path class="ndpfd3bmb"/></g>`,
		"fallback": "iconaut:euro-duo",
	});
}

export default Component;
