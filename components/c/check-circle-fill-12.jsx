import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2_9i5x-t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2_9i5x-t"/>`,
		"fallback": "octicon:check-circle-fill-12",
	});
}

export default Component;
