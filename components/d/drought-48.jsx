import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1acdg4aa.css';
import '../../css/i/ic7c7lbfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1acdg4aa"/><path class="ic7c7lbfd"/>`,
		"fallback": "energy-icons:drought-48",
	});
}

export default Component;
