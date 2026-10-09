import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czxxxcbar.css';
import '../../css/g/ga-ypktcu.css';
import '../../css/e/em6--xtxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czxxxcbar"/><path class="ga-ypktcu"/><path class="em6--xtxd"/>`,
		"fallback": "energy-icons:airport-20-bold",
	});
}

export default Component;
