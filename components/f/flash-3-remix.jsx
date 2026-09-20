import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz5qx46vr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz5qx46vr"/>`,
		"fallback": "streamline-flex:flash-3-remix",
	});
}

export default Component;
