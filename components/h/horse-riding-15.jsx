import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu1ccvu1w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu1ccvu1w"/>`,
		"fallback": "maki:horse-riding-15",
	});
}

export default Component;
