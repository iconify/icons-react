import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj_9ii32x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mj_9ii32x"/>`,
		"fallback": "streamline-plump:align-selection-remix",
	});
}

export default Component;
