import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf7zolb1b.css';
import '../../css/l/l6ei140ow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf7zolb1b"/><path class="l6ei140ow"/>`,
		"fallback": "material-icon-theme:copilot",
	});
}

export default Component;
