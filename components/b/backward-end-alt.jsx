import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-im0-bsd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-im0-bsd"/>`,
		"fallback": "f7:backward-end-alt",
	});
}

export default Component;
