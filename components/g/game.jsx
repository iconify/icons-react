import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hfktfho4e.css';
import '../../css/l/lmtoochgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hfktfho4e"/><path class="lmtoochgs"/></g>`,
		"fallback": "reicon:game",
	});
}

export default Component;
