import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7eynlbre.css';
import '../../css/n/nlezzjzzq.css';

const viewBox = {"width":1549,"height":2062};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k7eynlbre"/><path class="nlezzjzzq"/></g>`,
		"fallback": "thesvg:abn-amro",
	});
}

export default Component;
