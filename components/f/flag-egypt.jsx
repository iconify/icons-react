import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p61-0ivql.css';
import '../../css/r/r73utib8z.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/m/m2kw6abql.css';
import '../../css/d/dw8ilhbpb.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p61-0ivql"/><path class="r73utib8z"/><path class="e_6_n4b0n"/><path class="m2kw6abql"/><path class="dw8ilhbpb"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-egypt",
	});
}

export default Component;
