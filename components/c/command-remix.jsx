import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny36t5b-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny36t5b-e"/>`,
		"fallback": "streamline-plump:command-remix",
	});
}

export default Component;
