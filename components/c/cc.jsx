import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivk-30wy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nivk-30wy"/>`,
		"fallback": "icon-park-outline:cc",
	});
}

export default Component;
