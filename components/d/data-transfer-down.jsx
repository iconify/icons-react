import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs4i_ac-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs4i_ac-y"/>`,
		"fallback": "cil:data-transfer-down",
	});
}

export default Component;
