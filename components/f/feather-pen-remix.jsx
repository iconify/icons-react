import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_8gb412d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_8gb412d"/>`,
		"fallback": "streamline-plump:feather-pen-remix",
	});
}

export default Component;
