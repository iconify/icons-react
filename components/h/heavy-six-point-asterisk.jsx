import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r19nw1ghx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r19nw1ghx"/>`,
		"fallback": "pinhead:heavy-six-point-asterisk",
	});
}

export default Component;
