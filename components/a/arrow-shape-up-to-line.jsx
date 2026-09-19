import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nycn5mb_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nycn5mb_q"/>`,
		"fallback": "gravity-ui:arrow-shape-up-to-line",
	});
}

export default Component;
