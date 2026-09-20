import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g37vika8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g37vika8u"/>`,
		"fallback": "streamline-plump:compass-navigator-remix",
	});
}

export default Component;
