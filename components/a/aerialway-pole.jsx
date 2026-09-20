import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3uj6cz7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3uj6cz7s"/>`,
		"fallback": "pinhead:aerialway-pole",
	});
}

export default Component;
