import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2_viogkk.css';
import '../../css/v/vjdqvsb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u2_viogkk"/><path class="vjdqvsb5p"/></g>`,
		"fallback": "lucide:glass-water",
	});
}

export default Component;
