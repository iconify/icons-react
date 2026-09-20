import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm58ocm0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bm58ocm0p"/>`,
		"fallback": "streamline-plump:bitcoin-circle-1-remix",
	});
}

export default Component;
