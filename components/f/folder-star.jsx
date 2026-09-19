import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kueoalb2l.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kueoalb2l"/>`,
		"fallback": "zmdi:folder-star",
	});
}

export default Component;
