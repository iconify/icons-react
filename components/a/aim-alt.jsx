import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq1ofbodp.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq1ofbodp"/>`,
		"fallback": "ps:aim-alt",
	});
}

export default Component;
