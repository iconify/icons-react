import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a84m_v2tm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a84m_v2tm"/>`,
		"fallback": "si-glyph:circle-error",
	});
}

export default Component;
