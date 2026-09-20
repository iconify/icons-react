import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xftzngi_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xftzngi_y"/>`,
		"fallback": "streamline-plump:hotel-five-star-remix",
	});
}

export default Component;
