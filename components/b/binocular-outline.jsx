import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogql77bjb.css';
import '../../css/g/gypepac7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ogql77bjb"/><path class="gypepac7b"/>`,
		"fallback": "basil:binocular-outline",
	});
}

export default Component;
