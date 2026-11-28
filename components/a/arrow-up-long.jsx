import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/syl0-_9uf.css';
import '../../css/b/bqxb3bbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="syl0-_9uf"/><path class="bqxb3bbrd"/></g>`,
		"fallback": "iconaut:arrow-up-long",
	});
}

export default Component;
