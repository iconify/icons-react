import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8ddh9byc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8ddh9byc"/>`,
		"fallback": "pinhead:butterfly",
	});
}

export default Component;
