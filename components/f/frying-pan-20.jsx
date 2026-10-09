import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7e500buh.css';
import '../../css/g/gk7nwhbbw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7e500buh"/><path class="gk7nwhbbw"/>`,
		"fallback": "energy-icons:frying-pan-20",
	});
}

export default Component;
