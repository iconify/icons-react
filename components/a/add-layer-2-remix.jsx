import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st4u3kabo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="st4u3kabo"/>`,
		"fallback": "streamline:add-layer-2-remix",
	});
}

export default Component;
