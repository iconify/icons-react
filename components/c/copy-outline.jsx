import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/prbdyhsdx.css';
import '../../css/f/f15vtjeig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="prbdyhsdx"/><path class="f15vtjeig"/></g>`,
		"fallback": "bitcoin-icons:copy-outline",
	});
}

export default Component;
