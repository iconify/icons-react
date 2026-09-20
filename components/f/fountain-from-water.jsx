import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzcbppb3y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzcbppb3y"/>`,
		"fallback": "pinhead:fountain-from-water",
	});
}

export default Component;
