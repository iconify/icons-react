import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8mc_4l0a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8mc_4l0a"/>`,
		"fallback": "pinhead:campsite-and-wifi",
	});
}

export default Component;
