import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmiw9pf2d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmiw9pf2d"/>`,
		"fallback": "pinhead:crystal-ball-on-sphere-stand",
	});
}

export default Component;
