import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb3ujssrm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb3ujssrm"/>`,
		"fallback": "roentgen:grapes-3",
	});
}

export default Component;
