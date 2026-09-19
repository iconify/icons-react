import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/twtpdc4vw.css';
import '../../css/l/lh9jywg2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="twtpdc4vw"/><path class="lh9jywg2f"/></g>`,
		"fallback": "pepicons:hand-point-open",
	});
}

export default Component;
