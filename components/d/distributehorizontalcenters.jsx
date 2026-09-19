import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxzkg7b5x.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxzkg7b5x"/>`,
		"fallback": "whh:distributehorizontalcenters",
	});
}

export default Component;
