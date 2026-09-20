import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzi1mt9mp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzi1mt9mp"/>`,
		"fallback": "selfhst:cliparr-light",
	});
}

export default Component;
