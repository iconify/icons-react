import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxo32nbik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxo32nbik"/>`,
		"fallback": "ix:chart-types-filled",
	});
}

export default Component;
