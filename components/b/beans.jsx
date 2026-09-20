import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3d2xsbfa.css';
import '../../css/o/o2zoxdw1l.css';
import '../../css/s/sqkqqys5r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3d2xsbfa"/><path class="o2zoxdw1l"/><path class="sqkqqys5r"/>`,
		"fallback": "openmoji:beans",
	});
}

export default Component;
