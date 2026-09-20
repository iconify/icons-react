import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozyg45bes.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozyg45bes"/>`,
		"fallback": "pinhead:droplet-under-roof",
	});
}

export default Component;
