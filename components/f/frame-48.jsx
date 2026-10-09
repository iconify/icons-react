import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8tp9mb-t.css';
import '../../css/b/bju7mh2fw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8tp9mb-t"/><path class="bju7mh2fw"/>`,
		"fallback": "energy-icons:frame-48",
	});
}

export default Component;
