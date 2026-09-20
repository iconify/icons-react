import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsv7j_bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tsv7j_bli"/>`,
		"fallback": "solar:headphones-round-outline",
	});
}

export default Component;
