import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij8caccud.css';
import '../../css/p/p05vswb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij8caccud"/><path class="p05vswb1n"/>`,
		"fallback": "octicon:codescan-24",
	});
}

export default Component;
