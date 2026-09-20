import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8tjsabrk.css';
import '../../css/v/voa5iabbp.css';
import '../../css/y/y4n7jxi2m.css';
import '../../css/s/sj8o4_b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f8tjsabrk"/><path class="voa5iabbp"/><path class="y4n7jxi2m"/><path class="sj8o4_b-d"/></g>`,
		"fallback": "tabler:coins",
	});
}

export default Component;
