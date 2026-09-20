import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2odmxwvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n2odmxwvl"/>`,
		"fallback": "keyline-icons:clock-2-fill",
	});
}

export default Component;
