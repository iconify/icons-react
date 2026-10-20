import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyn89ysya.css';
import '../../css/u/usuy8n_ud.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyn89ysya"/><path class="usuy8n_ud"/>`,
		"fallback": "energy-icons:align-top-20",
	});
}

export default Component;
