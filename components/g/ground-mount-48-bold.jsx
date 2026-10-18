import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu2obeb0g.css';
import '../../css/p/p8dn0lt6q.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu2obeb0g"/><path class="p8dn0lt6q"/><path class="d6cvwtbsp"/>`,
		"fallback": "energy-icons:ground-mount-48-bold",
	});
}

export default Component;
