import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p61lf_73v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p61lf_73v"/>`,
		"fallback": "energy-icons:component-48-bold",
	});
}

export default Component;
