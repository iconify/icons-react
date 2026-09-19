import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt03m_jfw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt03m_jfw"/>`,
		"fallback": "dinkie-icons:envelope-small",
	});
}

export default Component;
