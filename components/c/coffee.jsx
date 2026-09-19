import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezlrxrblv.css';

const viewBox = {"width":1856,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezlrxrblv"/>`,
		"fallback": "fa:coffee",
	});
}

export default Component;
