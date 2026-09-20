import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x6tal9wly.css';
import '../../css/v/v7a8zqw0m.css';
import '../../css/v/v8oczjbbx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x6tal9wly"/><path class="v7a8zqw0m"/><path class="v8oczjbbx"/></g>`,
		"fallback": "streamline:galaxy-2",
	});
}

export default Component;
