import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gafb6ybya.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gafb6ybya"/>`,
		"fallback": "fa7-solid:baseball-bat-ball",
	});
}

export default Component;
