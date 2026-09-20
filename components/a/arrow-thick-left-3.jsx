import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlh665i3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlh665i3q"/>`,
		"fallback": "streamline-ultimate:arrow-thick-left-3",
	});
}

export default Component;
