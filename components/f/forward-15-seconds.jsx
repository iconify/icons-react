import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yvkvpilzx.css';
import '../../css/f/fbtvzqbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yvkvpilzx"/><path class="fbtvzqbdh"/></g>`,
		"fallback": "reicon:forward-15-seconds",
	});
}

export default Component;
