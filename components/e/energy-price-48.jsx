import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5b4wqbaq.css';
import '../../css/s/st1b0k75a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5b4wqbaq"/><path class="st1b0k75a"/>`,
		"fallback": "energy-icons:energy-price-48",
	});
}

export default Component;
