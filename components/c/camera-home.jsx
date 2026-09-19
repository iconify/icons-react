import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxc6vr24n.css';
import '../../css/s/sor5e_3vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mxc6vr24n"/><path class="sor5e_3vz"/>`,
		"fallback": "bxs:camera-home",
	});
}

export default Component;
