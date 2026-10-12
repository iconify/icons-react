import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6i2hsbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6i2hsbed"/>`,
		"fallback": "lucide-extended:calendar-off-filled",
	});
}

export default Component;
