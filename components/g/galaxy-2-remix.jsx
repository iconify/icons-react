import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew_8hjs3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ew_8hjs3f"/>`,
		"fallback": "streamline-plump:galaxy-2-remix",
	});
}

export default Component;
