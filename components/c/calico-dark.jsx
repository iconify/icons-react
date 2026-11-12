import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhwetz1ra.css';
import '../../css/e/ep2grliyt.css';
import '../../css/t/t1d4nlbha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhwetz1ra"/><path class="ep2grliyt"/><path class="t1d4nlbha"/>`,
		"fallback": "selfhst:calico-dark",
	});
}

export default Component;
