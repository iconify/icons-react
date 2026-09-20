import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uarvm0bms.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uarvm0bms"/>`,
		"fallback": "pinhead:flower-bouquet",
	});
}

export default Component;
