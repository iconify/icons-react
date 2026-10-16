import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9km6db4h.css';
import '../../css/o/ozsetf5vu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9km6db4h"/><path class="ozsetf5vu"/>`,
		"fallback": "energy-icons:axe-20",
	});
}

export default Component;
