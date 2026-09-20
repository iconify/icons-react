import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc1d8i_pc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc1d8i_pc"/>`,
		"fallback": "streamline:browser-remove-remix",
	});
}

export default Component;
