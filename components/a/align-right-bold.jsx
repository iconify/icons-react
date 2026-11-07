import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j85uijbob.css';
import '../../css/f/ffqi_vb_s.css';
import '../../css/q/qwho9ye_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j85uijbob"/><path class="ffqi_vb_s"/><path class="qwho9ye_i"/>`,
		"fallback": "solar:align-right-bold",
	});
}

export default Component;
