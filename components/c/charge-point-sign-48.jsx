import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbwxlclgf.css';
import '../../css/u/u5hq78bcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbwxlclgf"/><path class="u5hq78bcq"/>`,
		"fallback": "energy-icons:charge-point-sign-48",
	});
}

export default Component;
