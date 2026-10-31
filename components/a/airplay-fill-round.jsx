import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bym8_6bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bym8_6bag"/>`,
		"fallback": "coolicons:airplay-fill-round",
	});
}

export default Component;
