import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj87vsbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj87vsbvn"/>`,
		"fallback": "keyline-icons:folder-zip-sharp",
	});
}

export default Component;
