import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ww44dyb6a.css';
import '../../css/f/fzbt4jb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ww44dyb6a"/><path class="fzbt4jb2v"/></g>`,
		"fallback": "keyline-icons:coffee-two-tone",
	});
}

export default Component;
