import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ouamk3z.css';
import '../../css/o/o5o821fyy.css';
import '../../css/u/uz6l94i4h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9ouamk3z"/><path class="o5o821fyy"/><path class="uz6l94i4h"/>`,
		"fallback": "lineicons:instagram-fill",
	});
}

export default Component;
