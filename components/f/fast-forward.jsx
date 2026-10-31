import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t064iobsf.css';
import '../../css/u/ujwwjib6j.css';
import '../../css/y/ysuewmbkn.css';
import '../../css/m/m_akgybho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t064iobsf wm-shadow"/><path class="ujwwjib6j"/><path class="ysuewmbkn"/><path class="m_akgybho"/></g>`,
		"fallback": "withicons-retro:fast-forward",
	});
}

export default Component;
