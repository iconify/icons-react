import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_pgq_bpd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_pgq_bpd"/>`,
		"fallback": "pullo:check-circle-multiple-light",
	});
}

export default Component;
