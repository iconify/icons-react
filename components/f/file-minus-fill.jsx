import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9db1acos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9db1acos"/>`,
		"fallback": "mage:file-minus-fill",
	});
}

export default Component;
