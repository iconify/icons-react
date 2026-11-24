import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkeen_bhs.css';
import '../../css/v/v7kledb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkeen_bhs"/><path clip-rule="evenodd" class="v7kledb8b"/>`,
		"fallback": "lucide-extended:gpu-filled",
	});
}

export default Component;
