import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxsdmsp1w.css';
import '../../css/u/ukqxhebfj.css';
import '../../css/u/u0r3q2bse.css';
import '../../css/j/jxyv579ex.css';
import '../../css/p/phxuvwk1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxsdmsp1w"/><rect class="ukqxhebfj"/><rect class="u0r3q2bse"/><rect class="jxyv579ex"/><rect class="phxuvwk1e"/>`,
		"fallback": "famicons:barbell-outline",
	});
}

export default Component;
