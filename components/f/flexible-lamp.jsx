import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4r-5wgdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4r-5wgdp"/>`,
		"fallback": "game-icons:flexible-lamp",
	});
}

export default Component;
