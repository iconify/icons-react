import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9obxowyy.css';
import '../../css/n/n1rnmdo-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9obxowyy"/><path class="n1rnmdo-a"/>`,
		"fallback": "energy-icons:award-20",
	});
}

export default Component;
