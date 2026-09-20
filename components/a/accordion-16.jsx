import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weql5sbzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="weql5sbzf"/>`,
		"fallback": "qlementine-icons:accordion-16",
	});
}

export default Component;
