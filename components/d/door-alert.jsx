import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw14teb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw14teb0t"/>`,
		"fallback": "noviair:door-alert",
	});
}

export default Component;
