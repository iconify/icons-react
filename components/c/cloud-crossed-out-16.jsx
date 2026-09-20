import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh4yl5yun.css';
import '../../css/i/i8ocx-9hv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh4yl5yun"/><path class="i8ocx-9hv"/>`,
		"fallback": "qlementine-icons:cloud-crossed-out-16",
	});
}

export default Component;
