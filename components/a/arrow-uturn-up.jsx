import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldnq3kvwv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldnq3kvwv"/>`,
		"fallback": "f7:arrow-uturn-up",
	});
}

export default Component;
