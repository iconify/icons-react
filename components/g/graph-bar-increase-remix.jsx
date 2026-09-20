import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt8tarx-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qt8tarx-t"/>`,
		"fallback": "streamline-plump:graph-bar-increase-remix",
	});
}

export default Component;
