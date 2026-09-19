import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8m_n-tpk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8m_n-tpk"/>`,
		"fallback": "garden:align-right-stroke-16",
	});
}

export default Component;
