import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g81g92bif.css';
import '../../css/w/wrr9qib1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g81g92bif"/><path class="wrr9qib1n"/>`,
		"fallback": "energy-icons:charity-48",
	});
}

export default Component;
