import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn86m-bcf.css';
import '../../css/y/ydr36qd6q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn86m-bcf"/><path class="ydr36qd6q"/>`,
		"fallback": "energy-icons:id-card-20-bold",
	});
}

export default Component;
