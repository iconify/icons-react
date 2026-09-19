import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz752qb2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dz752qb2m"/>`,
		"fallback": "healthicons:contact-lenses2x-outline",
	});
}

export default Component;
