import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5bs2jbns.css';

const viewBox = {"width":989,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5bs2jbns"/>`,
		"fallback": "websymbol:docs-landscape",
	});
}

export default Component;
