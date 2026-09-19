import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox61td1yk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox61td1yk"/>`,
		"fallback": "icomoon-free:arrow-down2",
	});
}

export default Component;
