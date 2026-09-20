import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox8cu4u3p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox8cu4u3p"/>`,
		"fallback": "teenyicons:clockwise-outline",
	});
}

export default Component;
