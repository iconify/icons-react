import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-2ra_b2r.css';
import '../../css/s/sjfm5_b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-2ra_b2r"/><path class="sjfm5_b1p"/>`,
		"fallback": "mage:inbox-fill",
	});
}

export default Component;
