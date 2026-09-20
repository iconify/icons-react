import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glqc0ohwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glqc0ohwp"/>`,
		"fallback": "streamline-cyber:barcode-1",
	});
}

export default Component;
