import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th4c8l_nb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/q/qsgyigbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary th4c8l_nb"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="qsgyigbzj"/></g>`,
		"fallback": "iconaut:cloud-heart-duo",
	});
}

export default Component;
