import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nycrbqbau.css';
import '../../css/x/xmwe5fa4e.css';
import '../../css/p/pek5k1b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nycrbqbau"/><path class="xmwe5fa4e"/><path class="pek5k1b2v"/></g>`,
		"fallback": "iconaut:ai-mail",
	});
}

export default Component;
