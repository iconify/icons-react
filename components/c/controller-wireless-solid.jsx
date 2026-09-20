import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrbs79i2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mrbs79i2w"/>`,
		"fallback": "streamline:controller-wireless-solid",
	});
}

export default Component;
