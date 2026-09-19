import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq5zwab2c.css';
import '../../css/d/d1uus8zrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq5zwab2c"/><path class="d1uus8zrf"/>`,
		"fallback": "boxicons:bird-alt",
	});
}

export default Component;
