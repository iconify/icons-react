import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oegrs6bql.css';
import '../../css/e/e5hbpvfpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oegrs6bql"/><path class="e5hbpvfpw"/>`,
		"fallback": "energy-icons:carbon-tax-48",
	});
}

export default Component;
