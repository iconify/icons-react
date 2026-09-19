import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3k5x5h4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3k5x5h4d"/>`,
		"fallback": "gravity-ui:arrows-expand",
	});
}

export default Component;
