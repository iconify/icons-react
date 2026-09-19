import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn3j_6bgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jn3j_6bgg"/>`,
		"fallback": "ion:arrow-down-left-box-sharp",
	});
}

export default Component;
