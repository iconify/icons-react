import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-4rqjbfm.css';
import '../../css/h/h1xc_8yrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-4rqjbfm"/><path class="h1xc_8yrw"/>`,
		"fallback": "energy-icons:heat-network-48-bold",
	});
}

export default Component;
