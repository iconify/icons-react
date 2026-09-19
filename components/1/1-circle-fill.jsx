import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_jrh9c3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_jrh9c3a"/>`,
		"fallback": "bi:1-circle-fill",
	});
}

export default Component;
