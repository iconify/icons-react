import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b47tztw7o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b47tztw7o"/>`,
		"fallback": "streamline-flex:browser-multiple-window-remix",
	});
}

export default Component;
