import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jfswmq_7z.css';
import '../../css/j/j4xy7ua-m.css';
import '../../css/h/h6udzebto.css';
import '../../css/z/zuc_ukbkn.css';
import '../../css/c/c886rybsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="jfswmq_7z"/><path class="j4xy7ua-m"/><circle class="h6udzebto"/><circle class="zuc_ukbkn"/><circle class="c886rybsz"/></g>`,
		"fallback": "thesvg:apiko",
	});
}

export default Component;
