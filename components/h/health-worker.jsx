import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqo9k0b7j.css';
import '../../css/r/r9yno8bmh.css';
import '../../css/r/r78d-q55y.css';
import '../../css/e/eu9rdpu9l.css';
import '../../css/s/su5soacxt.css';
import '../../css/m/mkkvifbep.css';
import '../../css/h/hjhni3b4o.css';
import '../../css/x/x2xbq2bxy.css';
import '../../css/h/hisx-4b_z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqo9k0b7j"/><circle class="r9yno8bmh"/><path class="r78d-q55y"/><path class="eu9rdpu9l"/><path class="su5soacxt"/><path class="mkkvifbep"/><circle class="hjhni3b4o"/><path class="x2xbq2bxy"/><path class="hisx-4b_z"/>`,
		"fallback": "openmoji:health-worker",
	});
}

export default Component;
