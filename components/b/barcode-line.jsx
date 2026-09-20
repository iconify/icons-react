import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0a5y4b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0a5y4b5a"/>`,
		"fallback": "ri:barcode-line",
	});
}

export default Component;
