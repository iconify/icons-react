import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um7oh2ecr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um7oh2ecr"/>`,
		"fallback": "at-icons:hand",
	});
}

export default Component;
