import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk5xl6f6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hk5xl6f6x"/>`,
		"fallback": "qlementine-icons:alternate-16",
	});
}

export default Component;
