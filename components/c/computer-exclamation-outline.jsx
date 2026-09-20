import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf42_qb-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf42_qb-c"/>`,
		"fallback": "lsicon:computer-exclamation-outline",
	});
}

export default Component;
