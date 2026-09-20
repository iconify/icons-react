import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbv-3pwvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbv-3pwvy"/>`,
		"fallback": "mage:crown-a-fill",
	});
}

export default Component;
