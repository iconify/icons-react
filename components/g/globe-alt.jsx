import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a14f3rbvk.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a14f3rbvk"/>`,
		"fallback": "gis:globe-alt",
	});
}

export default Component;
