import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o16_wrbvl.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o16_wrbvl"/>`,
		"fallback": "whh:clipboard",
	});
}

export default Component;
