import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1vis67bb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d1vis67bb"/>`,
		"fallback": "icon-park-outline:error",
	});
}

export default Component;
