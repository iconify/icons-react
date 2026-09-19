import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we2zcubci.css';
import '../../css/h/h2_h-ebiv.css';
import '../../css/k/klvmpvknr.css';
import '../../css/s/sz2abxk9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we2zcubci"/><path class="h2_h-ebiv"/><path class="klvmpvknr"/><path class="sz2abxk9o"/>`,
		"fallback": "fxemoji:ballotboxwithcheck",
	});
}

export default Component;
