import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j7c14g7jg.css';
import '../../css/x/xg4m4rbsj.css';
import '../../css/f/fo4q8_bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="j7c14g7jg"/><rect class="xg4m4rbsj"/><rect transform="matrix(1 0 0 -1 9.5 14.5)" class="fo4q8_bnm"/><rect transform="matrix(1 0 0 -1 13 14.5)" class="fo4q8_bnm"/></g>`,
		"fallback": "bitcoin-icons:devices-outline",
	});
}

export default Component;
