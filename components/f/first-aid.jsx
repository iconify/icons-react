import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2m5ub-n.css';
import '../../css/j/jmyubu8dm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv2m5ub-n"/><path class="jmyubu8dm"/>`,
		"fallback": "openmoji:first-aid",
	});
}

export default Component;
