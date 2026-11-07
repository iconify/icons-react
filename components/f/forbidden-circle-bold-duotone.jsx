import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwnu8vvwz.css';
import '../../css/a/ah0oz-g8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwnu8vvwz"/><path class="ah0oz-g8a"/>`,
		"fallback": "solar:forbidden-circle-bold-duotone",
	});
}

export default Component;
