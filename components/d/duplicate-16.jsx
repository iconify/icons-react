import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_yba3x_g.css';
import '../../css/z/zr9odabgf.css';
import '../../css/h/h5_t-db-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_yba3x_g"/><path class="zr9odabgf"/><path class="h5_t-db-b"/>`,
		"fallback": "octicon:duplicate-16",
	});
}

export default Component;
