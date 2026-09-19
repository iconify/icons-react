import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd6pou8aa.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd6pou8aa"/>`,
		"fallback": "zmdi:folder-shared",
	});
}

export default Component;
