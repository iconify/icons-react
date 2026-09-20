import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdidb4b8e.css';
import '../../css/j/jt195abqe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdidb4b8e"/><path clip-rule="evenodd" class="jt195abqe"/>`,
		"fallback": "qlementine-icons:header-16",
	});
}

export default Component;
