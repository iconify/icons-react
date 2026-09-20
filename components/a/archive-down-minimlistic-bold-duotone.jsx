import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znv89pbeu.css';
import '../../css/p/pr6n6u_6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znv89pbeu"/><path clip-rule="evenodd" class="pr6n6u_6i"/>`,
		"fallback": "solar:archive-down-minimlistic-bold-duotone",
	});
}

export default Component;
