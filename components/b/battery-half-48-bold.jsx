import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia0elbbtb.css';
import '../../css/z/zwjjpmnxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia0elbbtb"/><path class="zwjjpmnxf"/>`,
		"fallback": "energy-icons:battery-half-48-bold",
	});
}

export default Component;
