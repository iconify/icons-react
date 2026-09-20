import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er8u5db2h.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er8u5db2h"/>`,
		"fallback": "medical-icon:drinking-fountain",
	});
}

export default Component;
