import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjo1_vbpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjo1_vbpa"/>`,
		"fallback": "selfhst:alby-hub-light",
	});
}

export default Component;
