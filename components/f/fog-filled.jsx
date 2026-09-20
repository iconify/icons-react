import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeb6jzb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeb6jzb_k"/>`,
		"fallback": "tdesign:fog-filled",
	});
}

export default Component;
