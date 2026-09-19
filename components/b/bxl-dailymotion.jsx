import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2g63cekk.css';
import '../../css/h/hm4-mmydo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2g63cekk"/><path class="hm4-mmydo"/>`,
		"fallback": "bx:bxl-dailymotion",
	});
}

export default Component;
