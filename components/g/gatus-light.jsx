import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfj_nptcs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfj_nptcs"/>`,
		"fallback": "selfhst:gatus-light",
	});
}

export default Component;
