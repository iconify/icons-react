import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryuntyb6m.css';
import '../../css/d/d2zrzusbd.css';
import '../../css/y/yt1kjcbtq.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryuntyb6m"/><path class="d2zrzusbd"/><path class="yt1kjcbtq"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:geothermal-plant-check-20",
	});
}

export default Component;
