import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bicqxs2zz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/y/y4m964bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bicqxs2zz secondary"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="y4m964bqz"/></g>`,
		"fallback": "iconaut:cloud-play-duo",
	});
}

export default Component;
