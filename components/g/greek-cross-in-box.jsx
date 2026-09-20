import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx588wb3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx588wb3x"/>`,
		"fallback": "roentgen:greek-cross-in-box",
	});
}

export default Component;
