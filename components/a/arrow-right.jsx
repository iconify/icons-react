import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4oh6vw-a.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4oh6vw-a"/>`,
		"fallback": "octicon:arrow-right",
	});
}

export default Component;
