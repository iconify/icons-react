import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4cletbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4cletbwh"/>`,
		"fallback": "streamline-ultimate:expand-2-bold",
	});
}

export default Component;
