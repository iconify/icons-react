import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl_o__u7l.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl_o__u7l"/>`,
		"fallback": "lineicons:hand",
	});
}

export default Component;
