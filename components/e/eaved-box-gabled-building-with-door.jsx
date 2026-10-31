import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dky4xzbaf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dky4xzbaf"/>`,
		"fallback": "pinhead:eaved-box-gabled-building-with-door",
	});
}

export default Component;
