import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq11l0bgp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq11l0bgp"/>`,
		"fallback": "game-icons:gardening-shears",
	});
}

export default Component;
