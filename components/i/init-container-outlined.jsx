import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2mbsmb2r.css';
import '../../css/x/xyie74fxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2mbsmb2r"/><path class="xyie74fxm"/>`,
		"fallback": "eos-icons:init-container-outlined",
	});
}

export default Component;
