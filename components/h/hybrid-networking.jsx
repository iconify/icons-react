import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2yv4rdoa.css';
import '../../css/u/uyf_mbp3e.css';
import '../../css/w/w5qbufbiq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2yv4rdoa"/><path class="uyf_mbp3e"/><path class="w5qbufbiq"/>`,
		"fallback": "carbon:hybrid-networking",
	});
}

export default Component;
