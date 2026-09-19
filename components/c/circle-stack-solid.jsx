import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw5x8jbeo.css';
import '../../css/f/fcrg7jb_a.css';
import '../../css/h/hp5c_5epy.css';
import '../../css/v/vahsu3btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bw5x8jbeo"/><path class="fcrg7jb_a"/><path class="hp5c_5epy"/><path class="vahsu3btp"/></g>`,
		"fallback": "heroicons:circle-stack-solid",
	});
}

export default Component;
