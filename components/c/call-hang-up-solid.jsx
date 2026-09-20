import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxt2l36ei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hxt2l36ei"/>`,
		"fallback": "streamline-plump:call-hang-up-solid",
	});
}

export default Component;
