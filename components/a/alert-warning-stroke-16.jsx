import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur6ybxbzg.css';
import '../../css/p/p9hlq3xpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur6ybxbzg"/><circle class="p9hlq3xpn"/>`,
		"fallback": "garden:alert-warning-stroke-16",
	});
}

export default Component;
