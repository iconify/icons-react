import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhxy26blm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhxy26blm"/>`,
		"fallback": "teenyicons:bulb-off-solid",
	});
}

export default Component;
