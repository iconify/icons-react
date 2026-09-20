import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cqba57b3z.css';
import '../../css/p/pnhr2obpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path clip-rule="evenodd" class="cqba57b3z"/><path class="pnhr2obpf"/></g>`,
		"fallback": "proicons:apple",
	});
}

export default Component;
