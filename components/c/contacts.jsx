import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep8jf_6qd.css';
import '../../css/o/oh4ogzb0c.css';
import '../../css/e/e2kqkxb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep8jf_6qd"/><circle class="oh4ogzb0c"/><path class="e2kqkxb7c"/>`,
		"fallback": "typcn:contacts",
	});
}

export default Component;
