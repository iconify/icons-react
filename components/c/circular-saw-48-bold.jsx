import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bydf-9bza.css';
import '../../css/f/fe7lf8b9s.css';
import '../../css/e/e54qfbcyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bydf-9bza"/><path class="fe7lf8b9s"/><path class="e54qfbcyw"/>`,
		"fallback": "energy-icons:circular-saw-48-bold",
	});
}

export default Component;
