import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/broozz6yg.css';
import '../../css/w/wfx3nk7mg.css';
import '../../css/x/xo6il5w8l.css';
import '../../css/l/la2_xzges.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="broozz6yg"/><path class="wfx3nk7mg"/><path class="xo6il5w8l"/><path class="la2_xzges"/>`,
		"fallback": "energy-icons:biomethane-plant-48",
	});
}

export default Component;
