import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmn53fb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmn53fb3c"/>`,
		"fallback": "lucide:credit-card-check",
	});
}

export default Component;
