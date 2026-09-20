import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfoobn32z.css';
import '../../css/m/mzwwu8c7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfoobn32z"/><path class="mzwwu8c7o"/>`,
		"fallback": "mingcute:eye-line",
	});
}

export default Component;
