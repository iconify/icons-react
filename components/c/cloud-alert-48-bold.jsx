import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-8v5fp5o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/x/x-w4dbc6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-8v5fp5o"/><path class="hwjgqrbah"/><path class="x-w4dbc6n"/>`,
		"fallback": "energy-icons:cloud-alert-48-bold",
	});
}

export default Component;
