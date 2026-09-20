import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/b/b4k3l0bhc.css';
import '../../css/b/b9t18gc1c.css';
import '../../css/x/xpeir8huy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="b4k3l0bhc"/><path class="b9t18gc1c"/><path class="xpeir8huy"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-uruguay",
	});
}

export default Component;
