import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0j8550vr.css';
import '../../css/b/bxkvxsbrr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0j8550vr"/><path clip-rule="evenodd" class="bxkvxsbrr"/>`,
		"fallback": "energy-icons:heat-pump-ground-48",
	});
}

export default Component;
