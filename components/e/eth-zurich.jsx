import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr14q2brf.css';

const viewBox = {"width":1000,"height":331};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr14q2brf"/>`,
		"fallback": "thesvg-color:eth-zurich",
	});
}

export default Component;
