import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf2u37s2p.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf2u37s2p"/>`,
		"fallback": "whh:details",
	});
}

export default Component;
