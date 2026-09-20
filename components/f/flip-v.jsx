import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhv8k2asq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhv8k2asq"/>`,
		"fallback": "uis:flip-v",
	});
}

export default Component;
