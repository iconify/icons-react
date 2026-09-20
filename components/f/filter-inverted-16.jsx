import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myjn58bcm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myjn58bcm"/>`,
		"fallback": "qlementine-icons:filter-inverted-16",
	});
}

export default Component;
