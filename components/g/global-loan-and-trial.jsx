import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjkafkbvo.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nrqcwibjb.css';
import '../../css/e/emew_ipme.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjkafkbvo"/><circle class="b6ueueufz"/><path class="nrqcwibjb"/><path class="emew_ipme"/>`,
		"fallback": "carbon:global-loan-and-trial",
	});
}

export default Component;
