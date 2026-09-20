import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l-1p6_byc.css';
import '../../css/j/jp_jy4rod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l-1p6_byc"/><path class="jp_jy4rod"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-network-globe",
	});
}

export default Component;
