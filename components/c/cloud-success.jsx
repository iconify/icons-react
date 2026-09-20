import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq3x6t7op.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sq3x6t7op"/>`,
		"fallback": "ix:cloud-success",
	});
}

export default Component;
