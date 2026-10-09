import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7kleu9_v.css';
import '../../css/m/mn53fqbfv.css';
import '../../css/u/ulvulp3em.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7kleu9_v"/><path class="mn53fqbfv"/><path class="ulvulp3em"/>`,
		"fallback": "energy-icons:flower-48-bold",
	});
}

export default Component;
