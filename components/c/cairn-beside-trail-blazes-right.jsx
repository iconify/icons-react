import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_tkm_8we.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_tkm_8we"/>`,
		"fallback": "pinhead:cairn-beside-trail-blazes-right",
	});
}

export default Component;
