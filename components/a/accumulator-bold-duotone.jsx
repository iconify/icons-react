import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u77j4kbnz.css';
import '../../css/c/c-z8pxbpl.css';
import '../../css/h/hrh2fcbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u77j4kbnz"/><path clip-rule="evenodd" class="c-z8pxbpl"/><path class="hrh2fcbcf"/>`,
		"fallback": "solar:accumulator-bold-duotone",
	});
}

export default Component;
