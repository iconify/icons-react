import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6i7h5b1b.css';
import '../../css/a/a98cjoanz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6i7h5b1b"/><path class="a98cjoanz"/>`,
		"fallback": "energy-icons:corner-up-right-20",
	});
}

export default Component;
