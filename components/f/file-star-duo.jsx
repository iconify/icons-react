import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyja28bos.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9mzy0bvl.css';
import '../../css/h/hji4qyb_f.css';
import '../../css/c/cr7gqybwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyja28bos secondary"/><g class="dt0cm9dhy primary"><path class="y9mzy0bvl"/><path class="hji4qyb_f"/><path class="cr7gqybwy"/></g>`,
		"fallback": "iconaut:file-star-duo",
	});
}

export default Component;
