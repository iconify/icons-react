import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hvb16ibtn.css';
import '../../css/j/j9lx0zklz.css';
import '../../css/e/erhl3ib4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hvb16ibtn"/><path class="j9lx0zklz"/><path class="erhl3ib4n"/></g>`,
		"fallback": "hugeicons:cowboy-hat",
	});
}

export default Component;
