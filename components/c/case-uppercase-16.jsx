import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ootbsqb3k.css';
import '../../css/k/kxz1uwvdj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ootbsqb3k"/><path clip-rule="evenodd" class="kxz1uwvdj"/>`,
		"fallback": "qlementine-icons:case-uppercase-16",
	});
}

export default Component;
