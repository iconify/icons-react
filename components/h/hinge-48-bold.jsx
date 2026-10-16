import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6yz84b5g.css';
import '../../css/e/e2u938bif.css';
import '../../css/f/f1mld5bzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6yz84b5g"/><path class="e2u938bif"/><path class="f1mld5bzp"/>`,
		"fallback": "energy-icons:hinge-48-bold",
	});
}

export default Component;
