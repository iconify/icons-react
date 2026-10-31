import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmxb9zfvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmxb9zfvi"/>`,
		"fallback": "coolicons:images-fill-round",
	});
}

export default Component;
