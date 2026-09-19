import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtdpz00sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtdpz00sp"/>`,
		"fallback": "ci:file-find",
	});
}

export default Component;
