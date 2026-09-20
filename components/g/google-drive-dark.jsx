import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azc14govv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azc14govv"/>`,
		"fallback": "selfhst:google-drive-dark",
	});
}

export default Component;
