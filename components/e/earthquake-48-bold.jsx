import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjw2pb06u.css';
import '../../css/e/e55pc6bqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjw2pb06u"/><path class="e55pc6bqd"/>`,
		"fallback": "energy-icons:earthquake-48-bold",
	});
}

export default Component;
