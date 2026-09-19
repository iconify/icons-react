import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrcok4b2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrcok4b2c"/>`,
		"fallback": "ion:car-sport-sharp",
	});
}

export default Component;
