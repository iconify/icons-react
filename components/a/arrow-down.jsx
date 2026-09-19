import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/a/auxk0ec3j.css';
import '../../css/r/rpsvq3bma.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="auxk0ec3j"/><path class="rpsvq3bma"/>`,
		"fallback": "ei:arrow-down",
	});
}

export default Component;
