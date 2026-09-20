import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpc6rz4yp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpc6rz4yp"/>`,
		"fallback": "teenyicons:facebook-solid",
	});
}

export default Component;
