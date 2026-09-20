import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufrx95bqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ufrx95bqm"/>`,
		"fallback": "streamline:arrow-up-dashed-square-solid",
	});
}

export default Component;
