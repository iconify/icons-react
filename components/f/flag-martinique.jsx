import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/s/sp21nbblb.css';
import '../../css/s/s__9l0bok.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="sp21nbblb"/><path class="s__9l0bok"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-martinique",
	});
}

export default Component;
