import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zen2agbyu.css';
import '../../css/v/v53qj5w7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zen2agbyu"/><path class="v53qj5w7x"/>`,
		"fallback": "energy-icons:disc-48",
	});
}

export default Component;
