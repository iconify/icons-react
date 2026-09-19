import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdnkc-v7d.css';
import '../../css/p/pd8vq-blm.css';
import '../../css/u/u0ofk_h1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdnkc-v7d"/><path class="pd8vq-blm"/><path class="u0ofk_h1t"/>`,
		"fallback": "carbon:function",
	});
}

export default Component;
