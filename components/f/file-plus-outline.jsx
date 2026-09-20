import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as8m_2_xd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as8m_2_xd"/>`,
		"fallback": "teenyicons:file-plus-outline",
	});
}

export default Component;
