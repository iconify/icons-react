import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbh2nacgo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbh2nacgo"/>`,
		"fallback": "map:car-repair",
	});
}

export default Component;
