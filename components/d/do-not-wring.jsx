import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csk2dwbkh.css';

const viewBox = {"width":520,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csk2dwbkh"/>`,
		"fallback": "ps:do-not-wring",
	});
}

export default Component;
