import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh_sqt51j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh_sqt51j"/>`,
		"fallback": "teenyicons:caret-vertical-small-outline",
	});
}

export default Component;
