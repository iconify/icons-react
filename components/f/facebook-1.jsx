import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ona1muubo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ona1muubo"/>`,
		"fallback": "streamline:facebook-1",
	});
}

export default Component;
