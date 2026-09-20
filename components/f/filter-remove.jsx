import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/pj6h5w.css';
import '../../css/e/eky6zv.css';
import '../../css/f/fr5r9e.css';
import '../../css/s/so-from-54.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c pj6h5w"/><path class="a0m25c eky6zv"/><path class="a0m25c fr5r9e"/>`,
		"fallback": "line-md:filter-remove",
	});
}

export default Component;
