import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfhjkjb3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tfhjkjb3n"/>`,
		"fallback": "streamline-plump:circle-and-square-shape-remix",
	});
}

export default Component;
