import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlvpmbbom.css';

const viewBox = {"width":123,"height":23.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlvpmbbom"/>`,
		"fallback": "thesvg-color:bradesco",
	});
}

export default Component;
