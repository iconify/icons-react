import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe-e3cc2p.css';
import '../../css/y/y8v76ebvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe-e3cc2p"/><path class="y8v76ebvs"/>`,
		"fallback": "uim:html3-alt",
	});
}

export default Component;
