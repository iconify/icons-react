import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7i9-fbzj.css';
import '../../css/k/k6t8-bcyt.css';
import '../../css/i/i6pxhx3fr.css';
import '../../css/v/venxv696d.css';
import '../../css/h/h4nmdubtc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7i9-fbzj"/><path class="k6t8-bcyt"/><path class="i6pxhx3fr"/><path class="venxv696d"/><path class="h4nmdubtc"/>`,
		"fallback": "energy-icons:co2-ship-48-bold",
	});
}

export default Component;
