import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0rmdbc9t.css';
import '../../css/c/cdt91-3up.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0rmdbc9t"/><path class="cdt91-3up"/>`,
		"fallback": "energy-icons:clipboard-20-bold",
	});
}

export default Component;
