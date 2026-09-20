import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln60e7d1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln60e7d1l"/>`,
		"fallback": "pixelarticons:folder-minus",
	});
}

export default Component;
