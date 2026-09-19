import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwibdw4bb.css';
import '../../css/z/zgea3bnvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwibdw4bb"/><path class="zgea3bnvr"/>`,
		"fallback": "boxicons:clock-7",
	});
}

export default Component;
