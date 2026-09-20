import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by6jb6bwn.css';
import '../../css/n/nirpuvbma.css';
import '../../css/y/yrpd6abvk.css';
import '../../css/u/u-q9eirrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="by6jb6bwn"/><path class="nirpuvbma"/><path class="yrpd6abvk"/><path class="u-q9eirrw"/></g>`,
		"fallback": "tdesign:icon",
	});
}

export default Component;
