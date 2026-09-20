import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqemtkn4p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqemtkn4p"/>`,
		"fallback": "pinhead:arrow-up-above-arrow-left-beside-arrow-right-above-arrow-down",
	});
}

export default Component;
