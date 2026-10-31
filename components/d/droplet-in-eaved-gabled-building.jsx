import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slkviu_2y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slkviu_2y"/>`,
		"fallback": "pinhead:droplet-in-eaved-gabled-building",
	});
}

export default Component;
