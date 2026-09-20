import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-eur9bkj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t-eur9bkj"/>`,
		"fallback": "streamline:fork-spoon-solid",
	});
}

export default Component;
