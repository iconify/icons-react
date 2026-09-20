import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q47b6fb-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q47b6fb-m"/>`,
		"fallback": "qlementine-icons:amp-16",
	});
}

export default Component;
