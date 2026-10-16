import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovghy0yrs.css';
import '../../css/a/a-nh-q2mi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovghy0yrs"/><path class="a-nh-q2mi"/>`,
		"fallback": "energy-icons:hacksaw-48",
	});
}

export default Component;
