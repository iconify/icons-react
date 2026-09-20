import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf_h84bmc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf_h84bmc"/>`,
		"fallback": "pinhead:car-and-tag",
	});
}

export default Component;
