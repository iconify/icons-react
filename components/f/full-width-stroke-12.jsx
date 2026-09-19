import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdblp_bzy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdblp_bzy"/>`,
		"fallback": "garden:full-width-stroke-12",
	});
}

export default Component;
