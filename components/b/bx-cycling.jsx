import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_1r2ws4u.css';
import '../../css/a/a1kinh57h.css';
import '../../css/q/quj0hibon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_1r2ws4u"/><circle class="a1kinh57h"/><path class="quj0hibon"/>`,
		"fallback": "bx:bx-cycling",
	});
}

export default Component;
