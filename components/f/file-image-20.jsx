import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-g74icta.css';
import '../../css/m/mh0v5urfi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-g74icta"/><path class="mh0v5urfi"/>`,
		"fallback": "energy-icons:file-image-20",
	});
}

export default Component;
