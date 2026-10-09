import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifignib1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifignib1x"/>`,
		"fallback": "energy-icons:co2-20-bold",
	});
}

export default Component;
