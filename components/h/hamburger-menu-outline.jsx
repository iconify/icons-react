import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k9m_yqbkl.css';
import '../../css/g/guqbehbzj.css';
import '../../css/c/cuj9bnb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k9m_yqbkl"/><path class="guqbehbzj"/><path class="cuj9bnb5v"/></g>`,
		"fallback": "solar:hamburger-menu-outline",
	});
}

export default Component;
