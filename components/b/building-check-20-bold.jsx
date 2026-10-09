import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqsj93biv.css';
import '../../css/u/uwl5ht5rg.css';
import '../../css/q/qvksvzdwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqsj93biv"/><path class="uwl5ht5rg"/><path class="qvksvzdwk"/>`,
		"fallback": "energy-icons:building-check-20-bold",
	});
}

export default Component;
