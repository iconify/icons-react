import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agva6viha.css';
import '../../css/m/mb4eqwb3y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agva6viha"/><path class="mb4eqwb3y"/>`,
		"fallback": "energy-icons:chef-knife-20-bold",
	});
}

export default Component;
