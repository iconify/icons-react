import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grf4dx6ip.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grf4dx6ip"/>`,
		"fallback": "maki:ferry-15",
	});
}

export default Component;
