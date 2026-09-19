import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pga_3pelc.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pga_3pelc"/>`,
		"fallback": "whh:fonthandwriting",
	});
}

export default Component;
