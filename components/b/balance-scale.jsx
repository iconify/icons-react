import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kof1pjl2v.css';
import '../../css/w/w6rc0es0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kof1pjl2v"/><path class="w6rc0es0l"/>`,
		"fallback": "cil:balance-scale",
	});
}

export default Component;
