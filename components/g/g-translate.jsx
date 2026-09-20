import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qchr4-bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qchr4-bpq"/>`,
		"fallback": "mdi:g-translate",
	});
}

export default Component;
