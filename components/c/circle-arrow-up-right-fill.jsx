import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzamn5btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rzamn5btn"/>`,
		"fallback": "keyline-icons:circle-arrow-up-right-fill",
	});
}

export default Component;
