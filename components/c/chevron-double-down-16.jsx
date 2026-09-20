import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo9qf5b_i.css';
import '../../css/q/qp7bbshih.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lo9qf5b_i"/><path clip-rule="evenodd" class="qp7bbshih"/>`,
		"fallback": "qlementine-icons:chevron-double-down-16",
	});
}

export default Component;
