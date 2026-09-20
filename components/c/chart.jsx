import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3qa1d7q.css';
import '../../css/i/itgv6gmfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3qa1d7q"/><path class="itgv6gmfb"/>`,
		"fallback": "uim:chart",
	});
}

export default Component;
