import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxubx6b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxubx6b0i"/>`,
		"fallback": "ri:barcode-fill",
	});
}

export default Component;
