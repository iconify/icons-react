import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-1-n-cnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-1-n-cnd"/>`,
		"fallback": "nrk:dice-2",
	});
}

export default Component;
