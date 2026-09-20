import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvnf7s1_x.css';
import '../../css/r/r2uj8dq1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvnf7s1_x"/><path class="r2uj8dq1d"/>`,
		"fallback": "stash:heart-duotone",
	});
}

export default Component;
