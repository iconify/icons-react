import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sev_i2bpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sev_i2bpm"/>`,
		"fallback": "energy-icons:chevron-up-48",
	});
}

export default Component;
