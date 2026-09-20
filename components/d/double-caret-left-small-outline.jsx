import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw25wvpgw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw25wvpgw"/>`,
		"fallback": "teenyicons:double-caret-left-small-outline",
	});
}

export default Component;
