import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p13isnbtv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p13isnbtv"/>`,
		"fallback": "streamline-color:heading-3-paragraph-styles-heading",
	});
}

export default Component;
