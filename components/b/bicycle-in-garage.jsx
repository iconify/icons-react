import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-15vo-zo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-15vo-zo"/>`,
		"fallback": "pinhead:bicycle-in-garage",
	});
}

export default Component;
