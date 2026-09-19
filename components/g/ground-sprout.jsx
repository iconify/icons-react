import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kic_o7bfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kic_o7bfo"/>`,
		"fallback": "game-icons:ground-sprout",
	});
}

export default Component;
