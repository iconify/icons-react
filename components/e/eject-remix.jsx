import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3yu25n4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3yu25n4q"/>`,
		"fallback": "streamline:eject-remix",
	});
}

export default Component;
