import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewio2v6iy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewio2v6iy"/>`,
		"fallback": "entypo:hair-cross",
	});
}

export default Component;
