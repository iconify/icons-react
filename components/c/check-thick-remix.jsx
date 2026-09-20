import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndqkclbfr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndqkclbfr"/>`,
		"fallback": "streamline-plump:check-thick-remix",
	});
}

export default Component;
