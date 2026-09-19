import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxc6vr24n.css';
import '../../css/l/lc94xtz6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mxc6vr24n"/><path class="lc94xtz6s"/>`,
		"fallback": "bx:bxs-camera-home",
	});
}

export default Component;
