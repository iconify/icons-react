import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_idn1bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_idn1bng"/>`,
		"fallback": "streamline-freehand:fireworks-2",
	});
}

export default Component;
