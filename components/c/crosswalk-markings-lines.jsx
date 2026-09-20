import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlymt9bdv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlymt9bdv"/>`,
		"fallback": "pinhead:crosswalk-markings-lines",
	});
}

export default Component;
