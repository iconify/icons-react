import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcc280bfo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcc280bfo"/>`,
		"fallback": "streamline:bank-remix",
	});
}

export default Component;
