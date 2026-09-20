import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/o/otq39xo5k.css';
import '../../css/i/ik1ce6bxy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="otq39xo5k"/><path class="ik1ce6bxy"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-thailand",
	});
}

export default Component;
