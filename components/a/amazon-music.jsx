import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oezb-5bow.css';

const viewBox = {"width":410,"height":82};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oezb-5bow"/>`,
		"fallback": "thesvg-color:amazon-music",
	});
}

export default Component;
