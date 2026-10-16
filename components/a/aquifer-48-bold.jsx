import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alk5rr8yk.css';
import '../../css/n/nhgdse76r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alk5rr8yk"/><path class="nhgdse76r"/>`,
		"fallback": "energy-icons:aquifer-48-bold",
	});
}

export default Component;
