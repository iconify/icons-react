import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jksnjxmjn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jksnjxmjn"/>`,
		"fallback": "streamline:image-flash-off-flash-power-connect-charge-off-electricity-lightning",
	});
}

export default Component;
