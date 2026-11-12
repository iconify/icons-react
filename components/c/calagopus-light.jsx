import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvwgg2gcm.css';
import '../../css/m/mpjepcckf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvwgg2gcm"/><path class="mpjepcckf"/>`,
		"fallback": "selfhst:calagopus-light",
	});
}

export default Component;
