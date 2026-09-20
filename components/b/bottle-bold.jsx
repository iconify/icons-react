import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfojp41_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfojp41_f"/>`,
		"fallback": "solar:bottle-bold",
	});
}

export default Component;
