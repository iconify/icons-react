import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hc_3f3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hc_3f3z"/>`,
		"fallback": "pinhead:gabled-building-with-door",
	});
}

export default Component;
