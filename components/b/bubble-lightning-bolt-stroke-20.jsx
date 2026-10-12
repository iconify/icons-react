import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-7j0sgsx.css';
import '../../css/b/bmmy7ztjn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-7j0sgsx"/><path class="bmmy7ztjn"/>`,
		"fallback": "garden:bubble-lightning-bolt-stroke-20",
	});
}

export default Component;
