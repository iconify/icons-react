import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbr5kbcpv.css';
import '../../css/l/lckqvt-5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbr5kbcpv"/><path class="lckqvt-5g"/>`,
		"fallback": "carbon:ibm-ai-on-z",
	});
}

export default Component;
