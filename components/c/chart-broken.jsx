import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/u/u1ptbhbni.css';
import '../../css/x/xs-nyyfqs.css';
import '../../css/d/d7mkc4yrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="u1ptbhbni"/><path class="xs-nyyfqs"/><path class="d7mkc4yrg"/></g>`,
		"fallback": "solar:chart-broken",
	});
}

export default Component;
