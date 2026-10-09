import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq5ig7bzi.css';
import '../../css/z/zt4ibv4ad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq5ig7bzi"/><path class="zt4ibv4ad"/>`,
		"fallback": "energy-icons:desert-20-bold",
	});
}

export default Component;
