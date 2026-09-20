import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5quj4l2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c5quj4l2t"/>`,
		"fallback": "streamline-plump:database-server-3-remix",
	});
}

export default Component;
