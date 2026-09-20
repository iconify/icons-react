import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx46lcbbm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bx46lcbbm"/>`,
		"fallback": "streamline:bill-cashless-solid",
	});
}

export default Component;
