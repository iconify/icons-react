import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk3dn9a9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk3dn9a9g"/>`,
		"fallback": "cil:arrow-thick-to-bottom",
	});
}

export default Component;
