import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1m_r6_oj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1m_r6_oj"/>`,
		"fallback": "fa7-solid:battery-2",
	});
}

export default Component;
