import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uojg8ub8n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uojg8ub8n"/>`,
		"fallback": "streamline-flex:hand-held-tablet-writing-remix",
	});
}

export default Component;
