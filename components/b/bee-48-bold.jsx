import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plya-7jhm.css';
import '../../css/i/iurj758pl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plya-7jhm"/><path class="iurj758pl"/>`,
		"fallback": "energy-icons:bee-48-bold",
	});
}

export default Component;
