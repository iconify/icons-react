import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2c34gbpd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2c34gbpd"/>`,
		"fallback": "wpf:calendar",
	});
}

export default Component;
