import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bidbbx3ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bidbbx3ik"/>`,
		"fallback": "thesvg-color:builtbybit",
	});
}

export default Component;
