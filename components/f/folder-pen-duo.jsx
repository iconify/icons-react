import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiklu-b8j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/g/gzcfjqb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiklu-b8j secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="gzcfjqb8o"/></g>`,
		"fallback": "iconaut:folder-pen-duo",
	});
}

export default Component;
