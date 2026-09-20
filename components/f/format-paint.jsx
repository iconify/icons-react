import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt34pac0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt34pac0y"/>`,
		"fallback": "mdi:format-paint",
	});
}

export default Component;
