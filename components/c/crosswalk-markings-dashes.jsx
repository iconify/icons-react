import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjjfd2g-o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjjfd2g-o"/>`,
		"fallback": "pinhead:crosswalk-markings-dashes",
	});
}

export default Component;
