import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qns1zst_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qns1zst_d"/>`,
		"fallback": "simple-icons:bytedance",
	});
}

export default Component;
