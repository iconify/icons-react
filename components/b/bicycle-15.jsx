import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4z7izb-w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4z7izb-w"/>`,
		"fallback": "maki:bicycle-15",
	});
}

export default Component;
