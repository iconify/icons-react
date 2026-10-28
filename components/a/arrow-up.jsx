import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk5rw_b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk5rw_b0t"/>`,
		"fallback": "codex:arrow-up",
	});
}

export default Component;
