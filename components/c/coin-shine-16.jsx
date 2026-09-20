import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onbtvybjc.css';
import '../../css/w/wwgxsc4ns.css';
import '../../css/z/z3q3mgbcd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onbtvybjc"/><path class="wwgxsc4ns"/><path class="z3q3mgbcd"/>`,
		"fallback": "qlementine-icons:coin-shine-16",
	});
}

export default Component;
