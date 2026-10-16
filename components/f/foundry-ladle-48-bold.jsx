import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8zb0dyhn.css';
import '../../css/e/eb2y314nt.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8zb0dyhn"/><path class="eb2y314nt"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:foundry-ladle-48-bold",
	});
}

export default Component;
