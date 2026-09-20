import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdx9xlb6g.css';
import '../../css/t/tkjxii01y.css';
import '../../css/x/x46h5dbea.css';
import '../../css/n/n45l1c27o.css';
import '../../css/g/g8j7--9du.css';
import '../../css/w/wqrt91bmj.css';
import '../../css/d/d-b04hbcb.css';
import '../../css/x/xk_ec3jsa.css';
import '../../css/w/wui9lsbyp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdx9xlb6g"/><path class="tkjxii01y"/><path class="x46h5dbea"/><circle class="n45l1c27o"/><circle class="g8j7--9du"/><circle class="wqrt91bmj"/><circle class="d-b04hbcb"/><path class="xk_ec3jsa"/><path class="wui9lsbyp"/>`,
		"fallback": "openmoji:flute",
	});
}

export default Component;
