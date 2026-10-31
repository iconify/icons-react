import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ced-vyb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ced-vyb0y"/>`,
		"fallback": "coolicons:face-smile-fill-round",
	});
}

export default Component;
