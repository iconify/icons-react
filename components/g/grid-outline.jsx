import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abmtkcbyd.css';
import '../../css/c/ctjrvzbee.css';
import '../../css/q/q_c-66bgc.css';
import '../../css/z/zcu-748sy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="abmtkcbyd"/><rect class="ctjrvzbee"/><rect class="q_c-66bgc"/><rect class="zcu-748sy"/>`,
		"fallback": "famicons:grid-outline",
	});
}

export default Component;
