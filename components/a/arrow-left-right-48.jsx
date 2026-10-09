import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5yx1ibtg.css';
import '../../css/f/fostv5aqj.css';
import '../../css/d/dg_f4ibgg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5yx1ibtg"/><path class="fostv5aqj"/><path class="dg_f4ibgg"/>`,
		"fallback": "energy-icons:arrow-left-right-48",
	});
}

export default Component;
