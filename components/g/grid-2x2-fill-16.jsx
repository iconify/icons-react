import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8825ybve.css';
import '../../css/n/n6zx95bli.css';
import '../../css/b/bedhueowv.css';
import '../../css/q/qi7c-v62z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="l8825ybve"/><rect class="n6zx95bli"/><rect class="bedhueowv"/><rect class="qi7c-v62z"/></g>`,
		"fallback": "garden:grid-2x2-fill-16",
	});
}

export default Component;
