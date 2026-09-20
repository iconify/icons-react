import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5xn3jb1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h5xn3jb1u"/>`,
		"fallback": "streamline-plump:dumbell-remix",
	});
}

export default Component;
