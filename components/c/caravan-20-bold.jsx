import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9yynmbhe.css';
import '../../css/g/g-xpidcsw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9yynmbhe"/><path class="g-xpidcsw"/>`,
		"fallback": "energy-icons:caravan-20-bold",
	});
}

export default Component;
