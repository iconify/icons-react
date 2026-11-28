import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsr1sacqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsr1sacqg"/>`,
		"fallback": "noviair-light:caravan-heart",
	});
}

export default Component;
