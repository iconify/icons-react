import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6xkd5abh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6xkd5abh"/>`,
		"fallback": "streamline-flex:increase-indent",
	});
}

export default Component;
