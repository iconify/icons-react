import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sezzy1b6s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sezzy1b6s"/>`,
		"fallback": "gis:earth-network",
	});
}

export default Component;
