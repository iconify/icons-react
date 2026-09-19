import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9p9psbbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9p9psbbi"/>`,
		"fallback": "game-icons:circling-fish",
	});
}

export default Component;
