import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdnb4ibza.css';
import '../../css/v/va7yy6tym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdnb4ibza"/><path class="va7yy6tym"/>`,
		"fallback": "qlementine-icons:gamepad-button-bottom-16",
	});
}

export default Component;
