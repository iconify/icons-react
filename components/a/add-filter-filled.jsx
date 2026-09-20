import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc-2jcbtt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc-2jcbtt"/>`,
		"fallback": "ix:add-filter-filled",
	});
}

export default Component;
