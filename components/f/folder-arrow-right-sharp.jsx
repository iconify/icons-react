import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2w4o88ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2w4o88ro"/>`,
		"fallback": "keyline-icons:folder-arrow-right-sharp",
	});
}

export default Component;
