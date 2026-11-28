import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agw2k9bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agw2k9bgg"/>`,
		"fallback": "noviair-light:camera-heart",
	});
}

export default Component;
