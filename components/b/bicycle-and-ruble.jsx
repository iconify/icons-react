import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inwf89b8t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inwf89b8t"/>`,
		"fallback": "pinhead:bicycle-and-ruble",
	});
}

export default Component;
