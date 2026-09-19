import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vek2j8b-a.css';

const viewBox = {"width":1185,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vek2j8b-a"/>`,
		"fallback": "websymbol:forward",
	});
}

export default Component;
