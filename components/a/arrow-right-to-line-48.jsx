import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpcq5gb3e.css';
import '../../css/j/j0wasckez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpcq5gb3e"/><path class="j0wasckez"/>`,
		"fallback": "energy-icons:arrow-right-to-line-48",
	});
}

export default Component;
