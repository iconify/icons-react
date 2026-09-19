import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtkxfz27r.css';
import '../../css/x/xz_jktb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtkxfz27r"/><path clip-rule="evenodd" class="xz_jktb3j"/>`,
		"fallback": "basil:backspace-outline",
	});
}

export default Component;
