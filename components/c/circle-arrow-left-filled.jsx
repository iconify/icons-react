import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ounr-vdwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ounr-vdwh"/>`,
		"fallback": "reicon:circle-arrow-left-filled",
	});
}

export default Component;
