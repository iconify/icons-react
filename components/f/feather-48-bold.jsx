import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp3lwibtz.css';
import '../../css/m/mdwpa6sgu.css';
import '../../css/u/udgxuob1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp3lwibtz"/><path class="mdwpa6sgu"/><path class="udgxuob1y"/>`,
		"fallback": "energy-icons:feather-48-bold",
	});
}

export default Component;
