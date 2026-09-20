import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhd0xyb3v.css';
import '../../css/e/egljupb1f.css';
import '../../css/q/q76ly5bjv.css';
import '../../css/y/yo90ibbcp.css';
import '../../css/e/e2lqtgbca.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhd0xyb3v"/><path class="egljupb1f"/><path class="q76ly5bjv"/><circle class="yo90ibbcp"/><path class="e2lqtgbca"/>`,
		"fallback": "openmoji:balance-scale",
	});
}

export default Component;
