import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbp5c087e.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbp5c087e"/>`,
		"fallback": "fa-regular:id-card",
	});
}

export default Component;
