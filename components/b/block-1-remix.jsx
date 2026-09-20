import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt88c0b8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vt88c0b8v"/>`,
		"fallback": "streamline-plump:block-1-remix",
	});
}

export default Component;
