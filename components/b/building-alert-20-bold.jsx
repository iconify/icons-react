import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqsj93biv.css';
import '../../css/u/uwl5ht5rg.css';
import '../../css/d/d0igczcjx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqsj93biv"/><path class="uwl5ht5rg"/><path class="d0igczcjx"/>`,
		"fallback": "energy-icons:building-alert-20-bold",
	});
}

export default Component;
