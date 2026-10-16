import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icyfw2p5c.css';
import '../../css/g/g2jzfhoqs.css';
import '../../css/r/rjsh6cbuu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icyfw2p5c"/><path class="g2jzfhoqs"/><path class="rjsh6cbuu"/>`,
		"fallback": "energy-icons:cherry-picker-48-bold",
	});
}

export default Component;
