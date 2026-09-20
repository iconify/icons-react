import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/c/c075gebtz.css';
import '../../css/q/qw58u_bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="c075gebtz"/><path class="qw58u_bpj"/></g>`,
		"fallback": "lets-icons:alarmclock",
	});
}

export default Component;
