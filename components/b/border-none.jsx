import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kul0447wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kul0447wr"/>`,
		"fallback": "boxicons:border-none",
	});
}

export default Component;
