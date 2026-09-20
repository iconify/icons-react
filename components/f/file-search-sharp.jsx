import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvz-i3byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvz-i3byl"/>`,
		"fallback": "keyline-icons:file-search-sharp",
	});
}

export default Component;
