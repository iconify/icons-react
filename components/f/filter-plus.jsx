import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/pj6h5w.css';
import '../../css/i/i1bv_o.css';
import '../../css/h/hy9wxw.css';
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
		"content": `<path class="a0m25c pj6h5w"/><path class="a0m25c i1bv_o"/><path class="a0m25c hy9wxw"/>`,
		"fallback": "line-md:filter-plus",
	});
}

export default Component;
