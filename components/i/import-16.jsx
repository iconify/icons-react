import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr1tfnb7u.css';
import '../../css/r/r73_lp1xo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xr1tfnb7u"/><path class="r73_lp1xo"/>`,
		"fallback": "qlementine-icons:import-16",
	});
}

export default Component;
