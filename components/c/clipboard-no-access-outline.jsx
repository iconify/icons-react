import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq5r37b4p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq5r37b4p"/>`,
		"fallback": "teenyicons:clipboard-no-access-outline",
	});
}

export default Component;
