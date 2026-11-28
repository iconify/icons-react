import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrm8teb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrm8teb5c"/>`,
		"fallback": "noviair:arrow-left",
	});
}

export default Component;
