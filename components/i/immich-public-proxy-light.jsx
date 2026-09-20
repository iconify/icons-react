import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecff8-bmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecff8-bmy"/>`,
		"fallback": "selfhst:immich-public-proxy-light",
	});
}

export default Component;
