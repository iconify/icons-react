import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc02_2oll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc02_2oll"/>`,
		"fallback": "lsicon:amount-up-outline",
	});
}

export default Component;
