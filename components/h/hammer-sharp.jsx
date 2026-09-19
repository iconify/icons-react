import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxnw_pr2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxnw_pr2p"/>`,
		"fallback": "ion:hammer-sharp",
	});
}

export default Component;
