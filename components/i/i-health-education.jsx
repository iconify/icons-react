import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eylj2m_hl.css';
import '../../css/i/i5ijq9zah.css';
import '../../css/e/e_xuapbsu.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eylj2m_hl"/><path class="i5ijq9zah"/><path class="e_xuapbsu"/>`,
		"fallback": "medical-icon:i-health-education",
	});
}

export default Component;
