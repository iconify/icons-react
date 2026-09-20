import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1g88eb3w.css';

const viewBox = {"width":326,"height":329};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1g88eb3w"/>`,
		"fallback": "thesvg-color:goil-light",
	});
}

export default Component;
