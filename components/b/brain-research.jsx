import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlo7xjcjj.css';
import '../../css/j/jg4zwqbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wlo7xjcjj"/><path class="jg4zwqbhw"/></g>`,
		"fallback": "iconoir:brain-research",
	});
}

export default Component;
