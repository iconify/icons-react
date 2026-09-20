import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-k63k_qn.css';
import '../../css/o/o6237vu6u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-k63k_qn"/><path class="o6237vu6u"/>`,
		"fallback": "streamline-pixel:content-files-books-1",
	});
}

export default Component;
