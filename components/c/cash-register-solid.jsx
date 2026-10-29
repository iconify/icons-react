import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a0vsf2bmy.css';
import '../../css/n/nne56ab1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a0vsf2bmy"/><path class="nne56ab1u wm-a"/></g>`,
		"fallback": "withicons:cash-register-solid",
	});
}

export default Component;
