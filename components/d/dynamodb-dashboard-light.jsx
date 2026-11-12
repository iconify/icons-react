import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3k1g3byx.css';
import '../../css/z/zl5x12lyi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3k1g3byx"/><path class="zl5x12lyi"/>`,
		"fallback": "selfhst:dynamodb-dashboard-light",
	});
}

export default Component;
