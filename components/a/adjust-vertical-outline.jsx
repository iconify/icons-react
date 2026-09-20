import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb55csbnv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb55csbnv"/>`,
		"fallback": "teenyicons:adjust-vertical-outline",
	});
}

export default Component;
