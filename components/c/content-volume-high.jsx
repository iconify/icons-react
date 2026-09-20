import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o00hksstx.css';
import '../../css/a/a_r59m-6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o00hksstx"/><path class="a_r59m-6h"/>`,
		"fallback": "streamline-block:content-volume-high",
	});
}

export default Component;
