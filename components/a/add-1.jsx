import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ng3y57a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ng3y57a"/>`,
		"fallback": "streamline-color:add-1",
	});
}

export default Component;
