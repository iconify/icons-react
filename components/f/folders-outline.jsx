import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfr9e0tvc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfr9e0tvc"/>`,
		"fallback": "teenyicons:folders-outline",
	});
}

export default Component;
