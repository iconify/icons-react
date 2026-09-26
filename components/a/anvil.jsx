import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg0qq-b_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg0qq-b_d"/>`,
		"fallback": "at-icons:anvil",
	});
}

export default Component;
