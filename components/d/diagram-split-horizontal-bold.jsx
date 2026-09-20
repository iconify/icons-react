import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu3t20bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu3t20bdu"/>`,
		"fallback": "streamline-ultimate:diagram-split-horizontal-bold",
	});
}

export default Component;
