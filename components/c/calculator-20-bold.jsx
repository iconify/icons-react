import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp1n75bba.css';
import '../../css/o/osbs8kx0d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp1n75bba"/><path class="osbs8kx0d"/>`,
		"fallback": "energy-icons:calculator-20-bold",
	});
}

export default Component;
