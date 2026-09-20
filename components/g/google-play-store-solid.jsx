import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c965ddcsg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c965ddcsg"/>`,
		"fallback": "teenyicons:google-play-store-solid",
	});
}

export default Component;
