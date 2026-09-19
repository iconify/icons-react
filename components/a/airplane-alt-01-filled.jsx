import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzmen5ibp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzmen5ibp"/>`,
		"fallback": "griddy-icons:airplane-alt-01-filled",
	});
}

export default Component;
