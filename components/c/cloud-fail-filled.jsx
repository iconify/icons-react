import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7-1mk3gf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t7-1mk3gf"/>`,
		"fallback": "ix:cloud-fail-filled",
	});
}

export default Component;
