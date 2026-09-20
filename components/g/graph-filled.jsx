import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm6y613bm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nm6y613bm"/>`,
		"fallback": "ix:graph-filled",
	});
}

export default Component;
