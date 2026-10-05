import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyhjk8bde.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyhjk8bde"/>`,
		"fallback": "pinhead:briefcase-with-phone-top-right",
	});
}

export default Component;
