import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcat1lb2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcat1lb2c"/>`,
		"fallback": "icon-park-outline:bydesign",
	});
}

export default Component;
