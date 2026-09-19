import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4tqe28pg.css';
import '../../css/d/dy_9shbsz.css';
import '../../css/y/yr6e5mbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4tqe28pg"/><rect class="dy_9shbsz"/><rect class="yr6e5mbng"/>`,
		"fallback": "boxicons:horizontal-align-left-filled",
	});
}

export default Component;
