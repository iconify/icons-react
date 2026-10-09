import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2h5hoimy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2h5hoimy"/>`,
		"fallback": "energy-icons:align-center-48-bold",
	});
}

export default Component;
