import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hztmhvb9w.css';
import '../../css/a/azeatlbry.css';
import '../../css/f/f0qyam6hq.css';
import '../../css/r/ryoi2p8la.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hztmhvb9w"/><path class="azeatlbry"/><path class="f0qyam6hq"/><path class="ryoi2p8la"/>`,
		"fallback": "energy-icons:devices-20-bold",
	});
}

export default Component;
