import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2w8m1bts.css';
import '../../css/s/st6zf__cy.css';
import '../../css/f/fpuu3bcbf.css';
import '../../css/c/czclt8bgq.css';
import '../../css/y/yoa9wypyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2w8m1bts"/><path class="st6zf__cy"/><path class="fpuu3bcbf"/><path class="czclt8bgq"/><path class="yoa9wypyw"/>`,
		"fallback": "fxemoji:eye",
	});
}

export default Component;
