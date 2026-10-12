import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi97z4bps.css';
import '../../css/r/rh7ug_byb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi97z4bps"/><path class="rh7ug_byb"/>`,
		"fallback": "energy-icons:frog-48-bold",
	});
}

export default Component;
