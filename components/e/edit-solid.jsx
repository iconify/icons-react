import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh7j8q2l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh7j8q2l"/>`,
		"fallback": "teenyicons:edit-solid",
	});
}

export default Component;
