import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/rrfyfxb_f.css';
import '../../css/o/otq39xo5k.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="rrfyfxb_f"/><path class="otq39xo5k"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-russia",
	});
}

export default Component;
