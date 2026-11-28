import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v8w075vzh.css';
import '../../css/i/i8vw3obrx.css';
import '../../css/f/febcbpb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v8w075vzh"/><path class="i8vw3obrx"/><path class="febcbpb6e"/></g>`,
		"fallback": "iconaut:folder-input",
	});
}

export default Component;
