import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw0603bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw0603bzy"/>`,
		"fallback": "mingcute:bow-tie-line",
	});
}

export default Component;
