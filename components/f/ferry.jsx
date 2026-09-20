import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzc-a659z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzc-a659z"/>`,
		"fallback": "temaki:ferry",
	});
}

export default Component;
