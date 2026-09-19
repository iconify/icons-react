import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1ou5xb0z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1ou5xb0z"/>`,
		"fallback": "gis:globe-o",
	});
}

export default Component;
