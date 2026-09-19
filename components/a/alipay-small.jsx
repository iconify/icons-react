import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf7059b2x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf7059b2x"/>`,
		"fallback": "dinkie-icons:alipay-small",
	});
}

export default Component;
