import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1b5uxz9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1b5uxz9d"/>`,
		"fallback": "streamline-ultimate:controls-forward-bold",
	});
}

export default Component;
