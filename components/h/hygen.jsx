import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt_35wlvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lt_35wlvb"/>`,
		"fallback": "file-icons:hygen",
	});
}

export default Component;
