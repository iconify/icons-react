import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp687lbvu.css';
import '../../css/l/lbcm5baeb.css';
import '../../css/q/q2wkkh6jj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp687lbvu"/><path class="lbcm5baeb"/><path class="q2wkkh6jj"/>`,
		"fallback": "energy-icons:directions-20-bold",
	});
}

export default Component;
