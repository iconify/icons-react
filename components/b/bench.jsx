import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0eluub0g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0eluub0g"/>`,
		"fallback": "temaki:bench",
	});
}

export default Component;
