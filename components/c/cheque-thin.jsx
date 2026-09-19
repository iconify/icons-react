import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6y5k5ocf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6y5k5ocf"/>`,
		"fallback": "iconamoon:cheque-thin",
	});
}

export default Component;
