import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sprj5mb-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sprj5mb-g"/>`,
		"fallback": "ix:cloud-download-add",
	});
}

export default Component;
