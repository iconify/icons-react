import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjzrwdbzw.css';
import '../../css/g/gac0p61ax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjzrwdbzw"/><path class="gac0p61ax"/>`,
		"fallback": "energy-icons:bell-off-48-bold",
	});
}

export default Component;
