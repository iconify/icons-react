import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip4n_nb-a.css';
import '../../css/n/nwb7bcc2i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip4n_nb-a"/><path class="nwb7bcc2i"/>`,
		"fallback": "energy-icons:carbon-label-48",
	});
}

export default Component;
