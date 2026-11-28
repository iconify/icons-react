import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tun7kpbmr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/d/da9v01fef.css';
import '../../css/n/n2ypo-bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tun7kpbmr"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="da9v01fef"/><path class="n2ypo-bfy"/></g>`,
		"fallback": "iconaut:folder-lines-duo",
	});
}

export default Component;
