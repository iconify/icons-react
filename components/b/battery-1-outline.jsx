import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic4bk9nie.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic4bk9nie"/>`,
		"fallback": "teenyicons:battery-1-outline",
	});
}

export default Component;
