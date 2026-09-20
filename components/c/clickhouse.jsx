import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9_q28bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9_q28bcp"/>`,
		"fallback": "simple-icons:clickhouse",
	});
}

export default Component;
