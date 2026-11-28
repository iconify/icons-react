import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gok39ybkg.css';
import '../../css/c/cw5no1rbj.css';
import '../../css/c/c4420yblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gok39ybkg"/><path class="cw5no1rbj"/><path class="c4420yblp"/></g>`,
		"fallback": "iconaut:baseline-duo",
	});
}

export default Component;
