import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi_kil9dx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi_kil9dx"/>`,
		"fallback": "energy-icons:energy-rating-48",
	});
}

export default Component;
