import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_rs8f8d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s0rwsfbqk.css';
import '../../css/t/tsrrv4k8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v3_rs8f8d"/><g class="dt0cm9dhy primary"><path class="s0rwsfbqk"/><path class="tsrrv4k8w"/></g>`,
		"fallback": "iconaut:blood-drop-duo",
	});
}

export default Component;
