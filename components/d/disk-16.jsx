import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chj_3ab-w.css';
import '../../css/v/v97disbjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chj_3ab-w"/><path clip-rule="evenodd" class="v97disbjn"/>`,
		"fallback": "qlementine-icons:disk-16",
	});
}

export default Component;
