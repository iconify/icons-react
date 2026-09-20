import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bt2msqyjo.css';
import '../../css/i/i_f0vibzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bt2msqyjo"/><path class="i_f0vibzj"/></g>`,
		"fallback": "proicons:american-football",
	});
}

export default Component;
