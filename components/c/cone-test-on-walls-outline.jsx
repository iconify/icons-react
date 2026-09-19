import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kny01z8rn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kny01z8rn"/>`,
		"fallback": "healthicons:cone-test-on-walls-outline",
	});
}

export default Component;
