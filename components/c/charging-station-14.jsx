import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-e2otb3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-e2otb3v"/>`,
		"fallback": "osmic:charging-station-14",
	});
}

export default Component;
