import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk5joxc5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk5joxc5j"/>`,
		"fallback": "bi:bar-chart",
	});
}

export default Component;
