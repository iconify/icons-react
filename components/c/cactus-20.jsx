import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnes2-b0p.css';
import '../../css/w/wofyv04is.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnes2-b0p"/><path class="wofyv04is"/>`,
		"fallback": "energy-icons:cactus-20",
	});
}

export default Component;
