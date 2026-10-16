import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgz7t3bfv.css';
import '../../css/x/xbm8wwb5b.css';
import '../../css/q/q1akcccvz.css';
import '../../css/b/bp6zlf0mx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgz7t3bfv"/><path class="xbm8wwb5b"/><path class="q1akcccvz"/><path class="bp6zlf0mx"/>`,
		"fallback": "energy-icons:airborne-wind-48",
	});
}

export default Component;
