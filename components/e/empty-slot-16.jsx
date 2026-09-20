import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojruu7w3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojruu7w3y"/>`,
		"fallback": "qlementine-icons:empty-slot-16",
	});
}

export default Component;
