import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp34zlbrg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp34zlbrg"/>`,
		"fallback": "at-icons:hourglass",
	});
}

export default Component;
