import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw9a3mbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw9a3mbhs"/>`,
		"fallback": "tabler:hexagon-minus",
	});
}

export default Component;
