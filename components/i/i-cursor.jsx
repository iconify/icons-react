import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qugofnbvv.css';

const viewBox = {"width":896,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qugofnbvv"/>`,
		"fallback": "fa:i-cursor",
	});
}

export default Component;
