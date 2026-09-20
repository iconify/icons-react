import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mymjfkbja.css';
import '../../css/x/xrc5d4cky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mymjfkbja"/><path class="xrc5d4cky"/></g>`,
		"fallback": "streamline-ultimate:bandage-leg",
	});
}

export default Component;
