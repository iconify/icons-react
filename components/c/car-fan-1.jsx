import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6s5kw3-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6s5kw3-v"/>`,
		"fallback": "tabler:car-fan-1",
	});
}

export default Component;
