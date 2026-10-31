import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6ysyvb8h.css';
import '../../css/w/wjt581t1z.css';
import '../../css/q/qfcqjabfa.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6ysyvb8h"/><path class="wjt581t1z"/><path class="qfcqjabfa"/>`,
		"fallback": "tabler-flags:french-guiana",
	});
}

export default Component;
