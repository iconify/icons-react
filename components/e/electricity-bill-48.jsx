import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oegrs6bql.css';
import '../../css/o/o7hd-nb0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oegrs6bql"/><path class="o7hd-nb0p"/>`,
		"fallback": "energy-icons:electricity-bill-48",
	});
}

export default Component;
