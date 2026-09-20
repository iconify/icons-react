import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4z_23_9n.css';
import '../../css/w/w40fbby0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4z_23_9n"/><path class="w40fbby0g"/>`,
		"fallback": "qlementine-icons:drum-brushes-16",
	});
}

export default Component;
