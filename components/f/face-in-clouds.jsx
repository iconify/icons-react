import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/e/emmpbab-x.css';
import '../../css/l/l3p10mc5l.css';
import '../../css/x/xzya86bjv.css';
import '../../css/u/ufa55acss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="emmpbab-x"/><path class="l3p10mc5l"/><path class="xzya86bjv"/><path class="ufa55acss"/></g>`,
		"fallback": "fluent-emoji-flat:face-in-clouds",
	});
}

export default Component;
