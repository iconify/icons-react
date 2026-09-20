import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohqme2bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohqme2bkz"/>`,
		"fallback": "tabler:battery-vertical-charging-2",
	});
}

export default Component;
