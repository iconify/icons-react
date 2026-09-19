import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpcls9dt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpcls9dt"/>`,
		"fallback": "fa7-regular:face-grin-wide",
	});
}

export default Component;
