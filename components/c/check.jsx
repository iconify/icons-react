import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg68m81-l.css';

const viewBox = {"width":32,"height":27};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg68m81-l"/>`,
		"fallback": "formkit:check",
	});
}

export default Component;
