import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu67u4hhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu67u4hhu"/>`,
		"fallback": "gg:expand",
	});
}

export default Component;
