import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pzeogml0q.css';
import '../../css/l/l-u631b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pzeogml0q"/><path class="l-u631b5i"/></g>`,
		"fallback": "hugeicons:comment-block-02",
	});
}

export default Component;
