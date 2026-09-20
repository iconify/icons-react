import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uim7w5btd.css';
import '../../css/q/qvdt6db7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uim7w5btd"/><path class="qvdt6db7f"/>`,
		"fallback": "streamline-ultimate:delivery-drone-bold",
	});
}

export default Component;
