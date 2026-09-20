import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm43ot0wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm43ot0wh"/>`,
		"fallback": "pixelarticons:building-community-sharp",
	});
}

export default Component;
