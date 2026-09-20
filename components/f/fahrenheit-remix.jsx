import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl5kyeu5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pl5kyeu5x"/>`,
		"fallback": "streamline-plump:fahrenheit-remix",
	});
}

export default Component;
