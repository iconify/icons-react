import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3ezunb9w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3ezunb9w"/>`,
		"fallback": "fa7-regular:face-laugh",
	});
}

export default Component;
