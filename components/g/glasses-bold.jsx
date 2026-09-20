import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo1-5g48y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zo1-5g48y"/>`,
		"fallback": "solar:glasses-bold",
	});
}

export default Component;
