import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sch0qpd4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sch0qpd4z"/>`,
		"fallback": "streamline-plump:circle-clock-remix",
	});
}

export default Component;
