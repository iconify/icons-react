import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrw5zccqv.css';
import '../../css/w/wa61dab_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrw5zccqv"/><path class="wa61dab_c"/>`,
		"fallback": "energy-icons:folder-minus-48-bold",
	});
}

export default Component;
