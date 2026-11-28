import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x24cv9i2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x24cv9i2f"/>`,
		"fallback": "noviair-light:hotel-star",
	});
}

export default Component;
