import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1bbw5cfm.css';

const viewBox = {"width":619,"height":88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1bbw5cfm"/>`,
		"fallback": "thesvg-color:five-guys",
	});
}

export default Component;
