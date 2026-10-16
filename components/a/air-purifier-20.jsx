import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf306wb4g.css';
import '../../css/q/q0wunibak.css';
import '../../css/e/e3e6rzbrs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf306wb4g"/><path class="q0wunibak"/><path class="e3e6rzbrs"/>`,
		"fallback": "energy-icons:air-purifier-20",
	});
}

export default Component;
