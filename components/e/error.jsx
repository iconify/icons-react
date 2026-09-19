import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st5j5cbnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="st5j5cbnn"/>`,
		"fallback": "icon-park:error",
	});
}

export default Component;
