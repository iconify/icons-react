import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz13tcbgt.css';
import '../../css/h/h6zvdsy7j.css';
import '../../css/k/kymxsbbbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz13tcbgt"/><path class="h6zvdsy7j"/><path class="kymxsbbbz"/>`,
		"fallback": "energy-icons:cable-landing-48-bold",
	});
}

export default Component;
