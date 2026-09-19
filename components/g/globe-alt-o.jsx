import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et6f67bcf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et6f67bcf"/>`,
		"fallback": "gis:globe-alt-o",
	});
}

export default Component;
