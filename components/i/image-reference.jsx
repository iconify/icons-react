import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhifhpf8r.css';
import '../../css/m/me2lh9ojh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhifhpf8r"/><path class="me2lh9ojh"/>`,
		"fallback": "carbon:image-reference",
	});
}

export default Component;
