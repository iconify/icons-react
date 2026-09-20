import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/f/fmo0fjb7j.css';
import '../../css/i/il04wzb_z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="fmo0fjb7j"/><path class="il04wzb_z"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-mauritania",
	});
}

export default Component;
