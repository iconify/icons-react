import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjswz-jcr.css';
import '../../css/j/j_z2tacpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjswz-jcr"/><path clip-rule="evenodd" class="j_z2tacpf"/>`,
		"fallback": "ix:battery-low",
	});
}

export default Component;
