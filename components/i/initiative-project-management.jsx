import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u01w8rbik.css';
import '../../css/m/m5ihdsbet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u01w8rbik"/><path class="m5ihdsbet"/>`,
		"fallback": "selfhst:initiative-project-management",
	});
}

export default Component;
