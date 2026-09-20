import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm47g_43j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wm47g_43j"/>`,
		"fallback": "streamline-flex:hierarchy-13-remix",
	});
}

export default Component;
