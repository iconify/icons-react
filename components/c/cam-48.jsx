import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl-yfkvrr.css';
import '../../css/p/p7gth1bju.css';
import '../../css/b/bujm-4v9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl-yfkvrr"/><path class="p7gth1bju"/><path class="bujm-4v9z"/>`,
		"fallback": "energy-icons:cam-48",
	});
}

export default Component;
