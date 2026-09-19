import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nllflp_eh.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dosjvkbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nllflp_eh"/><path class="bwibdw4bb"/><path class="dosjvkbqe"/>`,
		"fallback": "boxicons:disc",
	});
}

export default Component;
