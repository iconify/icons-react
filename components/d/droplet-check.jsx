import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrz19cbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrz19cbde"/>`,
		"fallback": "tabler:droplet-check",
	});
}

export default Component;
