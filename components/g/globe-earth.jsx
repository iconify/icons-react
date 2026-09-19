import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6gzcks7d.css';
import '../../css/f/faefp84ld.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6gzcks7d"/><path class="faefp84ld"/>`,
		"fallback": "gis:globe-earth",
	});
}

export default Component;
