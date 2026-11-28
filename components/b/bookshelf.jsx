import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_dg2gbxb.css';
import '../../css/n/npnurpite.css';
import '../../css/u/umcmaccis.css';
import '../../css/x/x-32_ypxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i_dg2gbxb"/><path class="npnurpite"/><path class="umcmaccis"/><path class="x-32_ypxg"/></g>`,
		"fallback": "iconaut:bookshelf",
	});
}

export default Component;
