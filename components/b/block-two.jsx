import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykjovtd5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykjovtd5l"/>`,
		"fallback": "icon-park-solid:block-two",
	});
}

export default Component;
