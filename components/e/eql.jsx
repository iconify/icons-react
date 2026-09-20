import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9q0xo4ir.css';
import '../../css/g/gnncr1dzh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9q0xo4ir"/><path class="gnncr1dzh"/>`,
		"fallback": "oui:eql",
	});
}

export default Component;
