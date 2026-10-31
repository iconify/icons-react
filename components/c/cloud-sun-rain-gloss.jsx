import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c7bc9jb7k.css';
import '../../css/p/pqt3wdp_a.css';
import '../../css/y/y5c60db7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c7bc9jb7k wm-k"/><path class="pqt3wdp_a wm-a"/><path class="wm-s y5c60db7a"/></g>`,
		"fallback": "withicons:cloud-sun-rain-gloss",
	});
}

export default Component;
