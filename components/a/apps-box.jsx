import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfw9dtb5l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfw9dtb5l"/>`,
		"fallback": "memory:apps-box",
	});
}

export default Component;
