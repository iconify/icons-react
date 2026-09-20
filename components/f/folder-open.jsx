import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op6a2bbfz.css';
import '../../css/s/s6z8b405g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op6a2bbfz"/><path class="s6z8b405g"/>`,
		"fallback": "pixel:folder-open",
	});
}

export default Component;
