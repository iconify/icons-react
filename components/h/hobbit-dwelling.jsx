import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdgzzcb5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdgzzcb5z"/>`,
		"fallback": "game-icons:hobbit-dwelling",
	});
}

export default Component;
