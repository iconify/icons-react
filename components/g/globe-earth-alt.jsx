import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw0ouac-i.css';
import '../../css/g/g6gzcks7d.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw0ouac-i"/><path class="g6gzcks7d"/>`,
		"fallback": "gis:globe-earth-alt",
	});
}

export default Component;
