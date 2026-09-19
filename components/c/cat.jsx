import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldmfezbtv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldmfezbtv"/>`,
		"fallback": "fa-solid:cat",
	});
}

export default Component;
