import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez1yabb1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ez1yabb1e"/>`,
		"fallback": "streamline-plump:factory-plant-remix",
	});
}

export default Component;
