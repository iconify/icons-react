import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9t5p3b5c.css';
import '../../css/o/ohfe1ob8s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9t5p3b5c"/><path class="ohfe1ob8s"/>`,
		"fallback": "lineicons:image",
	});
}

export default Component;
