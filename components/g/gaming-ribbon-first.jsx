import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m_4gf38nq.css';
import '../../css/v/vjkd57keb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m_4gf38nq"/><path class="vjkd57keb"/></g>`,
		"fallback": "streamline-ultimate:gaming-ribbon-first",
	});
}

export default Component;
