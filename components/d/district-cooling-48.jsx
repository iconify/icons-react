import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-w9aygjv.css';
import '../../css/q/qi1bdrbze.css';
import '../../css/a/afvmi23hj.css';
import '../../css/g/gfyoxoo-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-w9aygjv"/><path class="qi1bdrbze"/><path class="afvmi23hj"/><path class="gfyoxoo-z"/>`,
		"fallback": "energy-icons:district-cooling-48",
	});
}

export default Component;
