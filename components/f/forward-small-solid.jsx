import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snctfrb1l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snctfrb1l"/>`,
		"fallback": "teenyicons:forward-small-solid",
	});
}

export default Component;
