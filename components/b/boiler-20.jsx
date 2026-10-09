import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnezarb7y.css';
import '../../css/u/u-fc2jiif.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnezarb7y"/><path class="u-fc2jiif"/>`,
		"fallback": "energy-icons:boiler-20",
	});
}

export default Component;
