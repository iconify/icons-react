import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ft4gl8r.css';
import '../../css/n/nn7iw1brc.css';
import '../../css/z/zackx91ue.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-ft4gl8r"/><path class="nn7iw1brc"/><path class="zackx91ue"/>`,
		"fallback": "medical-icon:gift-shop",
	});
}

export default Component;
