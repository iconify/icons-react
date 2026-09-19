import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv5qt_s0x.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv5qt_s0x"/>`,
		"fallback": "ps:arrow-right",
	});
}

export default Component;
