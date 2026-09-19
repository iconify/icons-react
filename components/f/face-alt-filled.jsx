import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qilianfni.css';
import '../../css/c/c2wbpkxmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qilianfni"/><path class="c2wbpkxmq"/>`,
		"fallback": "boxicons:face-alt-filled",
	});
}

export default Component;
