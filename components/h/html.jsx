import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rj20lpbsw.css';
import '../../css/z/zc9wewl6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rj20lpbsw"/><path class="zc9wewl6u"/></g>`,
		"fallback": "proicons:html",
	});
}

export default Component;
