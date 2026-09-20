import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gam_9d_az.css';
import '../../css/l/lqted7wxy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gam_9d_az"/><path clip-rule="evenodd" class="lqted7wxy"/>`,
		"fallback": "lsicon:equipment-filled",
	});
}

export default Component;
