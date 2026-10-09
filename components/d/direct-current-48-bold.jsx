import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guj_uobue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guj_uobue"/>`,
		"fallback": "energy-icons:direct-current-48-bold",
	});
}

export default Component;
