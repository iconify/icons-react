import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adudr_bmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adudr_bmn"/>`,
		"fallback": "qlementine-icons:arrow-up-right-16",
	});
}

export default Component;
