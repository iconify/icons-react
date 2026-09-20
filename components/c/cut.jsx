import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmg620o6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmg620o6x"/>`,
		"fallback": "streamline-plump:cut",
	});
}

export default Component;
