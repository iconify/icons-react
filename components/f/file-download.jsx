import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_f8-np6u.css';
import '../../css/a/ackgx5bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k_f8-np6u"/><path class="ackgx5bdz"/></g>`,
		"fallback": "hugeicons:file-download",
	});
}

export default Component;
