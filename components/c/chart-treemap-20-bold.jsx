import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_3tybcwd.css';
import '../../css/u/u3mp5lqgi.css';
import '../../css/x/x-3aazb-g.css';
import '../../css/e/enwjp7ebc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_3tybcwd"/><path class="u3mp5lqgi"/><path class="x-3aazb-g"/><path class="enwjp7ebc"/>`,
		"fallback": "energy-icons:chart-treemap-20-bold",
	});
}

export default Component;
