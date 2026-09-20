import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh62o1bhk.css';
import '../../css/g/g3nrwvb9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh62o1bhk"/><path class="g3nrwvb9p"/>`,
		"fallback": "selfhst:contabo",
	});
}

export default Component;
