import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1rz9ybqr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/g/go4iz9b_l.css';
import '../../css/z/z78tyulfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1rz9ybqr secondary"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="go4iz9b_l"/><path class="z78tyulfx"/></g>`,
		"fallback": "iconaut:cloud-cog-duo",
	});
}

export default Component;
