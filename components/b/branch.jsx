import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1243xbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1243xbvl"/>`,
		"fallback": "eos-icons:branch",
	});
}

export default Component;
