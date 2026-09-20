import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz2jks-da.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vz2jks-da"/>`,
		"fallback": "qlementine-icons:check-tick-16",
	});
}

export default Component;
