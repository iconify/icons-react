import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez9qunc8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez9qunc8a"/>`,
		"fallback": "icon-park-outline:align-top-two",
	});
}

export default Component;
