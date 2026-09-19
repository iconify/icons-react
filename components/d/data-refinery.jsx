import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3c_ovw8n.css';
import '../../css/w/w8rkv-bcn.css';
import '../../css/s/s8m5ot9tn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3c_ovw8n"/><path class="w8rkv-bcn"/><path class="s8m5ot9tn"/>`,
		"fallback": "carbon:data-refinery",
	});
}

export default Component;
