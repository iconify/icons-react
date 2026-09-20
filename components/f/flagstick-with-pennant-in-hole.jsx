import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md80vybsv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md80vybsv"/>`,
		"fallback": "pinhead:flagstick-with-pennant-in-hole",
	});
}

export default Component;
