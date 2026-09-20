import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4nvolk3t.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4nvolk3t"/>`,
		"fallback": "wpf:calltransfer",
	});
}

export default Component;
