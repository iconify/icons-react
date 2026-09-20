import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9seuyb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j9seuyb-w"/>`,
		"fallback": "keyline-icons:circle-percent-fill",
	});
}

export default Component;
