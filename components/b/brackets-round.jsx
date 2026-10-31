import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt5htob7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt5htob7c"/>`,
		"fallback": "coolicons:brackets-round",
	});
}

export default Component;
