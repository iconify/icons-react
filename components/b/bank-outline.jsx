import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/buf9gg7ha.css';
import '../../css/s/sh_se6b_t.css';
import '../../css/c/ch5we-bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="buf9gg7ha"/><path class="sh_se6b_t"/><path class="ch5we-bio"/></g>`,
		"fallback": "bitcoin-icons:bank-outline",
	});
}

export default Component;
