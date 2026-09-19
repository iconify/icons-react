import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq777ab-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq777ab-t"/>`,
		"fallback": "icomoon-free:hour-glass",
	});
}

export default Component;
