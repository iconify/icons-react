import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlx0ax7hq.css';
import '../../css/p/pgcgrcc8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlx0ax7hq"/><path class="pgcgrcc8t"/>`,
		"fallback": "energy-icons:cricket-20-bold",
	});
}

export default Component;
