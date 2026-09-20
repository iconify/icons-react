import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul3n0ybti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ul3n0ybti"/>`,
		"fallback": "streamline-plump:bus-remix",
	});
}

export default Component;
