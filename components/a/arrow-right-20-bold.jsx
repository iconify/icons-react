import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgy1l_tlx.css';
import '../../css/n/nx7dqhb3m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgy1l_tlx"/><path class="nx7dqhb3m"/>`,
		"fallback": "energy-icons:arrow-right-20-bold",
	});
}

export default Component;
