import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn-xrwb_q.css';
import '../../css/f/fs5_8vkqb.css';
import '../../css/k/k-njt2b4a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn-xrwb_q"/><path class="fs5_8vkqb"/><path class="k-njt2b4a"/>`,
		"fallback": "temaki:cable-shutoff",
	});
}

export default Component;
