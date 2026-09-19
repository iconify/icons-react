import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osb4_j5yq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osb4_j5yq"/>`,
		"fallback": "file-icons:franca",
	});
}

export default Component;
