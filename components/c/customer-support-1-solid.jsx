import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c72y3bcyv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c72y3bcyv"/>`,
		"fallback": "streamline:customer-support-1-solid",
	});
}

export default Component;
