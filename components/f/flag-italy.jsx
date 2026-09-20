import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/b/bzun-yi8p.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="rmslx6b5x"/><path class="bzun-yi8p"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-italy",
	});
}

export default Component;
