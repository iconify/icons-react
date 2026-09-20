import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuht4h08l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuht4h08l"/>`,
		"fallback": "streamline-sharp:home-1",
	});
}

export default Component;
