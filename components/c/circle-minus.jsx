import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmeomb9uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmeomb9uc"/>`,
		"fallback": "hugeicons:circle-minus",
	});
}

export default Component;
