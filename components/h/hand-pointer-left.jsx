import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqtcx1wqq.css';

const viewBox = {"width":432,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqtcx1wqq"/>`,
		"fallback": "ps:hand-pointer-left",
	});
}

export default Component;
