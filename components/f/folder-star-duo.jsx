import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o98piib2v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-ixbzbzz.css';
import '../../css/u/u-c-k03su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o98piib2v secondary"/><g class="dt0cm9dhy primary"><path class="z-ixbzbzz"/><path class="u-c-k03su"/></g>`,
		"fallback": "iconaut:folder-star-duo",
	});
}

export default Component;
