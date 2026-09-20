import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-uw9nblo.css';
import '../../css/s/suoyxqbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i-uw9nblo"/><path class="suoyxqbld"/></g>`,
		"fallback": "lucide:align-vertical-space-around",
	});
}

export default Component;
