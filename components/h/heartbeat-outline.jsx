import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1bf0p4rg.css';
import '../../css/g/gf6bg710v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1bf0p4rg"/><path class="gf6bg710v"/>`,
		"fallback": "basil:heartbeat-outline",
	});
}

export default Component;
