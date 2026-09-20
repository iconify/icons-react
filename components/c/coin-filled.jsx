import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r00wx5u2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r00wx5u2j"/>`,
		"fallback": "ix:coin-filled",
	});
}

export default Component;
