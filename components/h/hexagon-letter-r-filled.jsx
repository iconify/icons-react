import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a82up1x0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a82up1x0y"/>`,
		"fallback": "tabler:hexagon-letter-r-filled",
	});
}

export default Component;
