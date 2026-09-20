import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv4r6ac-d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vv4r6ac-d"/>`,
		"fallback": "teenyicons:clipboard-plus-solid",
	});
}

export default Component;
