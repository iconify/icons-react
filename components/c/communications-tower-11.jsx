import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-edn5bcp.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-edn5bcp"/>`,
		"fallback": "maki:communications-tower-11",
	});
}

export default Component;
