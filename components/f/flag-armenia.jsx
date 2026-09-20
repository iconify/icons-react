import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/o/otq39xo5k.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="otq39xo5k"/><path class="e_6_n4b0n"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-armenia",
	});
}

export default Component;
