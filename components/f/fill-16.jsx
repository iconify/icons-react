import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9ujhk2vm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9ujhk2vm"/>`,
		"fallback": "qlementine-icons:fill-16",
	});
}

export default Component;
