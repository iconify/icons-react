import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohm9ldbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohm9ldbqi"/>`,
		"fallback": "keyline-icons:circle-arrow-down-sharp-fill",
	});
}

export default Component;
