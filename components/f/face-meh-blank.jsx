import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt0-osbym.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt0-osbym"/>`,
		"fallback": "fa7-regular:face-meh-blank",
	});
}

export default Component;
