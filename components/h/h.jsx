import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdig666dz.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdig666dz"/>`,
		"fallback": "whh:h",
	});
}

export default Component;
