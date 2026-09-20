import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quzl_8ckk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quzl_8ckk"/>`,
		"fallback": "mdi:folder-multiple-outline",
	});
}

export default Component;
