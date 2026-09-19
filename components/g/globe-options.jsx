import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkmm-1g0c.css';
import '../../css/h/h1ytemzns.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkmm-1g0c"/><path class="h1ytemzns"/>`,
		"fallback": "gis:globe-options",
	});
}

export default Component;
