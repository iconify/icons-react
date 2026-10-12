import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkeen_bhs.css';
import '../../css/f/f583e5b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkeen_bhs"/><path clip-rule="evenodd" class="f583e5b1t"/>`,
		"fallback": "lucide-extended:gpu-filled",
	});
}

export default Component;
