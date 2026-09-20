import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdx_gpbqt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdx_gpbqt"/>`,
		"fallback": "temaki:garden-bed",
	});
}

export default Component;
