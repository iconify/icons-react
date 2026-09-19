import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg-5y4bmb.css';
import '../../css/p/pv1m9o-dj.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg-5y4bmb"/><path class="pv1m9o-dj"/>`,
		"fallback": "foundation:comments",
	});
}

export default Component;
