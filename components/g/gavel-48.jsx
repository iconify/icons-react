import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opt71mb5e.css';
import '../../css/k/k1vorjqdj.css';
import '../../css/r/rg1xqfbjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opt71mb5e"/><path class="k1vorjqdj"/><path class="rg1xqfbjj"/>`,
		"fallback": "energy-icons:gavel-48",
	});
}

export default Component;
