import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e66cusbja.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e66cusbja"/>`,
		"fallback": "streamline:image-flash-1-flash-power-connect-charge-electricity-lightning",
	});
}

export default Component;
