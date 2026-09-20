import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t74qrxbru.css';
import '../../css/k/kw9o2v1zy.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t74qrxbru"/><path class="kw9o2v1zy"/>`,
		"fallback": "iwwa:edit",
	});
}

export default Component;
