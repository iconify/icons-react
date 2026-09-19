import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wujha7bby.css';
import '../../css/y/yjyrgobih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wujha7bby"/><path class="yjyrgobih"/></g>`,
		"fallback": "hugeicons:cloud-sync",
	});
}

export default Component;
