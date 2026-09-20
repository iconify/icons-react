import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpmq7pbah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpmq7pbah"/>`,
		"fallback": "selfhst:cooler-control-light",
	});
}

export default Component;
