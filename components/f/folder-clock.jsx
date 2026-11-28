import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-ixbzbzz.css';
import '../../css/h/hvapmib7z.css';
import '../../css/c/c2bllziij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z-ixbzbzz"/><path class="hvapmib7z"/><path class="c2bllziij"/></g>`,
		"fallback": "iconaut:folder-clock",
	});
}

export default Component;
