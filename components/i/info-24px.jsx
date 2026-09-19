import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9xegbb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9xegbb3e"/>`,
		"fallback": "healthicons:info-24px",
	});
}

export default Component;
