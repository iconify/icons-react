import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tsumh_p.css';
import '../../css/r/rk7xerbiz.css';
import '../../css/c/ckcn9xpxx.css';
import '../../css/m/mu_g0gb0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6tsumh_p"/><path class="rk7xerbiz"/><path class="ckcn9xpxx"/><path class="mu_g0gb0e"/>`,
		"fallback": "energy-icons:frost-20",
	});
}

export default Component;
