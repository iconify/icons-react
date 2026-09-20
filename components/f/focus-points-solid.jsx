import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytl2035my.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ytl2035my"/>`,
		"fallback": "streamline-plump:focus-points-solid",
	});
}

export default Component;
