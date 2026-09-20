import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/r/rx9uik1il.css';
import '../../css/q/qw58u_bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="rx9uik1il"/><path class="qw58u_bpj"/></g>`,
		"fallback": "lets-icons:alarmclock-duotone-line",
	});
}

export default Component;
