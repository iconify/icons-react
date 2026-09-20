import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq06-391u.css';
import '../../css/r/rte4cibeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yq06-391u"/><path class="rte4cibeo"/>`,
		"fallback": "token:abt",
	});
}

export default Component;
