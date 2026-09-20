import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7ev4k4sm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b7ev4k4sm"/>`,
		"fallback": "qlementine-icons:function-linear-16",
	});
}

export default Component;
