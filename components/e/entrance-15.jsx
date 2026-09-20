import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6qtzmbeo.css';
import '../../css/y/ybtqz23gr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6qtzmbeo"/><path class="ybtqz23gr"/>`,
		"fallback": "maki:entrance-15",
	});
}

export default Component;
