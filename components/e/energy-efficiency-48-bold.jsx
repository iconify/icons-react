import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffy_fhb2a.css';
import '../../css/n/n8n104bks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffy_fhb2a"/><path class="n8n104bks"/>`,
		"fallback": "energy-icons:energy-efficiency-48-bold",
	});
}

export default Component;
