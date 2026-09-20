import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksjvsb74q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksjvsb74q"/>`,
		"fallback": "simple-icons:duckdb",
	});
}

export default Component;
