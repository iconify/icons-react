import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo4j70bbm.css';
import '../../css/m/mxmopzb5i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo4j70bbm"/><path class="mxmopzb5i"/>`,
		"fallback": "energy-icons:droplet-20-bold",
	});
}

export default Component;
