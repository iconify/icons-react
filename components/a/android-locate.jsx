import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swlgwwb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swlgwwb7c"/>`,
		"fallback": "ion:android-locate",
	});
}

export default Component;
