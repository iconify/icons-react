import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlnf44bvp.css';
import '../../css/n/nfe2dnbyj.css';
import '../../css/q/qx-gz1b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer hlnf44bvp"/><path class="duoicon-secondary-layer nfe2dnbyj"/><path class="duoicon-primary-layer qx-gz1b8z"/>`,
		"fallback": "duo-icons:bridge",
	});
}

export default Component;
