import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpmgkheit.css';
import '../../css/r/rw5av3bvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpmgkheit"/><path class="rw5av3bvc"/>`,
		"fallback": "energy-icons:apartment-48-bold",
	});
}

export default Component;
