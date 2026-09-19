import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv47u9sdn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv47u9sdn"/>`,
		"fallback": "gis:full-screen",
	});
}

export default Component;
