import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4k1ykbww.css';
import '../../css/i/i73gwxbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u4k1ykbww"/><path class="i73gwxbuy"/></g>`,
		"fallback": "hugeicons:al-aqsa-mosque",
	});
}

export default Component;
