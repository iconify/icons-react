import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb6theb9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb6theb9q"/>`,
		"fallback": "bi:bank2",
	});
}

export default Component;
