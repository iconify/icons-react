import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw66n2btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw66n2btc"/>`,
		"fallback": "coolicons:image-off-fill-round",
	});
}

export default Component;
