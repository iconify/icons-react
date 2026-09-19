import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/o/ok5a-4evb.css';
import '../../css/s/skzxnomci.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="ok5a-4evb"/><path class="skzxnomci"/>`,
		"fallback": "ei:close-o",
	});
}

export default Component;
