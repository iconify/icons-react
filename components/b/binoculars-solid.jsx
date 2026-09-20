import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdp36pboi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdp36pboi"/>`,
		"fallback": "streamline-plump:binoculars-solid",
	});
}

export default Component;
