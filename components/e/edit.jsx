import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq8u3fbvr.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq8u3fbvr"/>`,
		"fallback": "wpf:edit",
	});
}

export default Component;
