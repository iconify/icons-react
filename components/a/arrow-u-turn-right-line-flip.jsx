import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwkb5zbim.css';
import '../../css/i/i656hcjlp.css';
import '../../css/f/f1apohbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jwkb5zbim"/><path class="i656hcjlp"/><path class="f1apohbqu"/></g>`,
		"fallback": "iconaut:arrow-u-turn-right-line-flip",
	});
}

export default Component;
