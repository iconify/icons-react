import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvs5jlb-y.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvs5jlb-y"/>`,
		"fallback": "jam:browse",
	});
}

export default Component;
