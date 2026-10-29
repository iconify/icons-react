import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utqzt6bcp.css';
import '../../css/q/qt8u0z4vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utqzt6bcp wm-k"/><path class="qt8u0z4vf wm-a"/>`,
		"fallback": "withicons-bauhaus:frown",
	});
}

export default Component;
