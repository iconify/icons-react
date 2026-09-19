import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kavn-lb2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kavn-lb2g"/>`,
		"fallback": "game-icons:hammer-nails",
	});
}

export default Component;
