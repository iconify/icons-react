import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-z7xub8k.css';
import '../../css/a/ahjpa3bwy.css';
import '../../css/q/q1jjt9b_b.css';
import '../../css/y/yikp27blk.css';
import '../../css/d/dvguk2nbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t-z7xub8k"/><path class="ahjpa3bwy"/><path class="q1jjt9b_b"/><path class="yikp27blk"/><path class="dvguk2nbb"/></g>`,
		"fallback": "lucide:hop",
	});
}

export default Component;
