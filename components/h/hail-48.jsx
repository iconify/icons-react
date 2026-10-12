import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoulf2y9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoulf2y9a"/>`,
		"fallback": "energy-icons:hail-48",
	});
}

export default Component;
