import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzzkxlb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzzkxlb3e"/>`,
		"fallback": "keyline-icons:clock-4-sharp-fill",
	});
}

export default Component;
