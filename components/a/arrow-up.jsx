import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4py13b7f.css';
import '../../css/s/s4volvbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4py13b7f"/><path class="s4volvbqd"/>`,
		"fallback": "prime:arrow-up",
	});
}

export default Component;
