import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5cc2kldq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5cc2kldq"/>`,
		"fallback": "temaki:billboard",
	});
}

export default Component;
