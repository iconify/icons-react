import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe8xottkx.css';
import '../../css/w/wh1r03b-i.css';
import '../../css/k/k3lgfsb0i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe8xottkx"/><path class="wh1r03b-i"/><path class="k3lgfsb0i"/>`,
		"fallback": "energy-icons:charging-cable-48-bold",
	});
}

export default Component;
