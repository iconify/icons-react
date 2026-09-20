import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrkryr7mg.css';
import '../../css/s/s4volvbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrkryr7mg"/><path class="s4volvbqd"/>`,
		"fallback": "prime:arrow-down",
	});
}

export default Component;
