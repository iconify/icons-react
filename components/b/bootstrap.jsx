import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg_gupbki.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg_gupbki"/>`,
		"fallback": "lineicons:bootstrap",
	});
}

export default Component;
