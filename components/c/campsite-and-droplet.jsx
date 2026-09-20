import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn_ek_m6q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn_ek_m6q"/>`,
		"fallback": "pinhead:campsite-and-droplet",
	});
}

export default Component;
