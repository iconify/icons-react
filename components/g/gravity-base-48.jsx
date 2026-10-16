import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrtzqb8qa.css';
import '../../css/p/p0_q9fb5b.css';
import '../../css/y/y-445ob1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrtzqb8qa"/><path class="p0_q9fb5b"/><path class="y-445ob1s"/>`,
		"fallback": "energy-icons:gravity-base-48",
	});
}

export default Component;
