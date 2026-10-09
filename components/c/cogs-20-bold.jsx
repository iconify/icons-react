import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg8tnbcvl.css';
import '../../css/s/sx-04bc4i.css';
import '../../css/r/rwowwm9cp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg8tnbcvl"/><path class="sx-04bc4i"/><path class="rwowwm9cp"/>`,
		"fallback": "energy-icons:cogs-20-bold",
	});
}

export default Component;
