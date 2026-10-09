import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt3wdaccl.css';
import '../../css/d/d7a8hbbiq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt3wdaccl"/><path class="d7a8hbbiq"/>`,
		"fallback": "energy-icons:depot-charging-48",
	});
}

export default Component;
