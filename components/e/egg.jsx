import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsn8jgaeq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsn8jgaeq"/>`,
		"fallback": "fa-solid:egg",
	});
}

export default Component;
