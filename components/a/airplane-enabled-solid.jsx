import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul4olbb8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul4olbb8p"/>`,
		"fallback": "streamline-plump:airplane-enabled-solid",
	});
}

export default Component;
